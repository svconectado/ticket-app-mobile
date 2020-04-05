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
  @ViewChild('slider') private slider: IonSlides;
  slideOpts: any = {
    slidesPerView: 1
  };
  tiposEmpresa: TipoEmpresa[] = TIPO_EMPRESA;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService
  ) {
    this.layoutService.subscribeToLayoutChanges().subscribe(observerResponse => {
      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.small))
        this.slideOpts.slidesPerView = 3;
      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.mediumHanset))
      this.slideOpts.slidesPerView = 2;
      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.extraSmall))
        this.slideOpts.slidesPerView = 1;
    });
  }

  ionViewWillEnter() {

  }

}
