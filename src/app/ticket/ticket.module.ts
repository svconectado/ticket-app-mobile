import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TicketPageRoutingModule } from './ticket-routing.module';

import { TicketPage } from './ticket.page';
import { SharedModule } from '@shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

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
