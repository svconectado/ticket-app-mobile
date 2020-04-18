import {
  state,
  style,
  group,
  animate,
  trigger,
  transition,
} from '@angular/animations';
import { NavController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { map } from 'rxjs/operators';
import { Subscription, combineLatest } from 'rxjs';

import { Dia } from '@core/enums/dia.enum';
import { Empresa } from '@core/models/empresa.model';
import { Sucursal } from '@core/models/sucursal.model';
import { EmpresaService } from '@core/services/empresa.service';
import { SucursalService } from '@core/services/sucursal.service';
import { TicketService } from '@core/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({height: '*', opacity: 0})),
      transition(':leave', [
        style({height: '*', opacity: 1}),
        group([
          animate(300, style({height: 0})),
          animate('200ms ease-in-out', style({opacity: '0'}))
        ])
      ]),
      transition(':enter', [
        style({height: '0', opacity: 0}),
        group([
          animate(300, style({height: '*'})),
          animate('400ms ease-in-out', style({opacity: '1'}))
        ])
      ])
    ])
  ]
})
export class TicketPage implements OnInit, OnDestroy {
  subscription: Subscription;
  empresa: Empresa;
  sucursal: Sucursal;
  open = false;

  constructor(
    private navCtrl: NavController,
    private ticketService: TicketService,
    private empresaService: EmpresaService,
    private sucursalService: SucursalService
  ) { }

  ngOnInit() {
    this.subscription = combineLatest([
      this.empresaService.object$,
      this.sucursalService.object$
    ]).pipe(
      map(([empresa, sucursal]) => {
        return {
          empresa: empresa as Empresa,
          sucursal: sucursal as Sucursal
        }
      })
    ).subscribe((result: any) => {
      if (!result.empresa || !result.sucursal)
        this.navCtrl.navigateBack('/');
      this.empresa = result.empresa;
      this.sucursal = result.sucursal;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getDay(dayValue: number): string {
    return Dia[dayValue];
  }

  toggleSchudels(): void {
    this.open = !this.open;
  }

  getTicket() {
    this.ticketService.setupSocketConnection();
  }

}
