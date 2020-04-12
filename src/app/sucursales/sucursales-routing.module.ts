import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucursalesPage } from './sucursales.page';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sucursales',
    pathMatch: 'full'
  },
  {
    path: 'sucursales',
    component: SucursalesPage,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: ':id',
        loadChildren: () => import('@ticket/ticket.module').then( m => m.TicketPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucursalesPageRoutingModule {}
