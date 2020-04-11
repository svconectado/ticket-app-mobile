import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresasPage } from './empresas.page';
import { PrimaryComponent } from './components/primary/primary.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresasPage,
    children: [
      {
        path: '',
        component: PrimaryComponent
      },
      {
        path: ':id',
        loadChildren: () => import('@sucursales/sucursales.module').then( m => m.SucursalesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasPageRoutingModule {}
