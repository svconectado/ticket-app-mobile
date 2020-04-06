import { Component, OnInit } from '@angular/core';
import { Empresa } from '@core/models/empresa.model';
import { EMPRESAS } from '@core/const/empresas.const';
import { Sucursal } from '@core/models/sucursal.model';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {
  empresa: Empresa = EMPRESAS[0];
  sucursales: Sucursal[] = this.empresa.sucursales;

  constructor() { }

  ngOnInit() {
  }

}
