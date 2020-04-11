import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { BasicHeaderComponent } from './components/basic-header/basic-header.component';
import { SearchingComponent } from './components/searching/searching.component';


@NgModule({
  declarations: [
    SearchingComponent,
    BasicHeaderComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    LayoutModule,
  ],
  exports: [
    IonicModule,
    SearchingComponent,
    BasicHeaderComponent
  ]
})
export class SharedModule { }
