import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TicketPageRoutingModule } from './ticket-routing.module';

import { TicketPage } from './ticket.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    TicketPageRoutingModule
  ],
  declarations: [TicketPage]
})
export class TicketPageModule {}
