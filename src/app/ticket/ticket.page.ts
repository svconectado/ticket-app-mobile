import { Component, OnInit, OnDestroy } from '@angular/core';
import { Empresa } from '@core/models/empresa.model';
import { EmpresaService } from '@core/services/empresa.service';
import { Subscription } from 'rxjs';
import { EMPRESAS } from '@core/const/empresas.const';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit, OnDestroy {
  subscription: Subscription;
  empresa: Empresa;

  constructor(
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.subscription = this.empresaService.empresa$.subscribe((empresa: Empresa) => {
      this.empresa = EMPRESAS[0];
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
