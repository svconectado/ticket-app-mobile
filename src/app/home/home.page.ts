import { Component } from '@angular/core';
import { TipoEmpresa } from '@core/models/tipo-empresa.model';

import { TIPO_EMPRESA } from '@core/const/tipo-empresa.const';
import { LayoutService } from '@core/services/layout.service';
import { CustomBreakpointNames } from '@core/services/breakpoints.service';
import { TipoEmpresaService } from '@core/services/tipo-empresa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts: any = { };
  colors: string[] = [
    '#68889E',
    '#34B29D',
    '#AFD872',
  ]
  tiposEmpresa: TipoEmpresa[] = TIPO_EMPRESA;

  constructor(
    private layoutService: LayoutService,
    private tipoEmpresaService: TipoEmpresaService
  ) {
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
    this.tipoEmpresaService.getList().subscribe((tipos)=> {
      console.log(tipos);
    })
  }
}
