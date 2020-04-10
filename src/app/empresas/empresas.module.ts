import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresasPageRoutingModule } from './empresas-routing.module';
import { SharedModule } from '@shared/shared.module';

import { EmpresasPage } from './empresas.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    SharedModule,
    EmpresasPageRoutingModule
  ],
  declarations: [EmpresasPage]
})
export class EmpresasPageModule {}
