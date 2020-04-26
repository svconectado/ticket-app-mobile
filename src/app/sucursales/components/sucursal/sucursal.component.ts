import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sucursal } from '@core/models/sucursal.model';
import { SucursalService } from '@core/services/sucursal.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss'],
})
export class SucursalComponent {
  @Input() sucursal: Sucursal;
  @Output() selectedSucursalEmitter = new EventEmitter<Sucursal>();

  constructor(
    private sucursalService: SucursalService
  ) { }

  selectedSucursal() {
    this.sucursalService.selectedObject(this.sucursal);
    this.selectedSucursalEmitter.emit(this.sucursal);
  }

}
