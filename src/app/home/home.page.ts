import { Component, ViewChild } from '@angular/core';
import { TipoEmpresa } from '@core/models/tipo-empresa.model';

import { TIPO_EMPRESA } from '@core/const/tipo-empresa.const';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { IonSlides } from '@ionic/angular';
import { LayoutService } from '@core/services/layout.service';
import { CustomBreakpointNames } from '@core/services/breakpoints.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts: any = { };
  tiposEmpresa: TipoEmpresa[] = TIPO_EMPRESA;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService
  ) {
    this.layoutService.subscribeToLayoutChanges().subscribe(observerResponse => {
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

}
