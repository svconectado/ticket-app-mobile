import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { SucursalesPageRoutingModule } from './sucursales-routing.module';

import { SucursalesPage } from './sucursales.page';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { SucursalListContainer } from './containers/sucursal-list/sucursal-list.container';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    SharedModule,
    SucursalesPageRoutingModule
  ],
  declarations: [
    MainComponent,
    SucursalesPage,
    SucursalComponent,
    SucursalListContainer
  ]
})
export class SucursalesPageModule {}
