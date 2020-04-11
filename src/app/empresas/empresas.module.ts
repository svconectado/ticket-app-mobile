import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresasPageRoutingModule } from './empresas-routing.module';
import { SharedModule } from '@shared/shared.module';

import { EmpresasPage } from './empresas.page';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaListContainer } from './containers/empresa-list/empresa-list.container';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    SharedModule,
    EmpresasPageRoutingModule
  ],
  declarations: [
    EmpresasPage,
    MainComponent,
    EmpresaComponent,
    EmpresaListContainer,
  ]
})
export class EmpresasPageModule {}
