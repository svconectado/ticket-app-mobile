import { Component, Input } from '@angular/core';
import { Sucursal } from '@core/models/sucursal.model';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss'],
})
export class SucursalComponent {
  @Input() sucursal: Sucursal;

  constructor() { }

}
