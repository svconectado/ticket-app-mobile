import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucursalesPageRoutingModule } from './sucursales-routing.module';

import { SucursalesPage } from './sucursales.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    SharedModule,
    SucursalesPageRoutingModule
  ],
  declarations: [SucursalesPage]
})
export class SucursalesPageModule {}
