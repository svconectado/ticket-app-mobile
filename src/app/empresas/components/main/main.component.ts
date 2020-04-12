import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { TipoEmpresa } from '@core/models/tipo-empresa.model';
import { TipoEmpresaService } from '@core/services/tipo-empresa.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  tipoEmpresa: TipoEmpresa;

  constructor(
    private navCtrl: NavController,
    private tipoService: TipoEmpresaService
  ) { }

  ngOnInit() {
    this.subscription = this.tipoService.object$.subscribe((tipo: TipoEmpresa) => {
      if (!tipo)
        this.navCtrl.navigateBack('/');
      this.tipoEmpresa = tipo;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
