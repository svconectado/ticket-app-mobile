import { Component } from '@angular/core';

import { TipoEmpresa } from '@core/models/tipo-empresa.model';
import { LayoutService } from '@core/services/layout.service';
import { CustomBreakpointNames } from '@core/services/breakpoints.service';
import { NavController, LoadingController } from '@ionic/angular';

import { ListContainer } from '@shared/containers/list/list.container';
import { TipoEmpresaService } from '@core/services/tipo-empresa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends ListContainer<TipoEmpresa> {
  slideOpts: any = { };
  colors: string[] = [
    '#68889E',
    '#34B29D',
    '#AFD872',
  ]

  constructor(
    private navCtrl: NavController,
    private layoutService: LayoutService,
    protected loadingCtrl: LoadingController,
    private tipoEmpresaService: TipoEmpresaService
  ) {
    super(tipoEmpresaService, loadingCtrl);
    this.layoutService.subscribeToLayoutChanges().subscribe(() => {
      let cantSlides = 0;
      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.small))
        cantSlides = 3;
      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.mediumHanset))
        cantSlides = 2;
      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.extraSmall))
        cantSlides = 1;
      this.slideOpts = {
        slidesPerView: cantSlides
      }
    })
  }

  ionViewDidEnter() {
    if (!this.items) {
      this.getList();
    }
  }

  selectedTipo(tipo: TipoEmpresa) {
    this.tipoEmpresaService.selectedObject(tipo);
    this.navCtrl.navigateForward('/empresas')
  }

}
