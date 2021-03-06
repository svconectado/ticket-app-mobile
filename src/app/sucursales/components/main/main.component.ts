import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Empresa } from '@core/models/empresa.model';
import { EMPRESAS } from '@core/const/empresas.const';
import { EmpresaService } from '@core/services/empresa.service';
import { NavController } from '@ionic/angular';
import { TitleService } from '@core/services/title.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  title: string;
  empresa: Empresa;

  constructor(
    private navCtrl: NavController,
    private titleService: TitleService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.subscription = this.empresaService.object$.subscribe((empresa: Empresa) => {
      if (!empresa)
        this.navCtrl.navigateBack('/');
      this.empresa = empresa;
      this.title = this.titleService.title.split(' ')[0];
      this.titleService.title = this.empresa.nombre;
    })
  }

  ngOnDestroy() {
    this.titleService.resetTitle(this.title);
    this.subscription.unsubscribe();
  }

}
