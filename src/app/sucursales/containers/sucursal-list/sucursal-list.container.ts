import { Component, OnInit, Input } from '@angular/core';
import { Sucursal } from '@core/models/sucursal.model';
import { SUCURSALES } from '@core/const/sucursal.const';
import { Empresa } from '@core/models/empresa.model';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.container.html',
  styleUrls: ['./sucursal-list.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class SucursalListContainer implements OnInit {
  @Input() empresa: Empresa | number;
  @Input() sucursales: Sucursal[];
  constructor() { }

  ngOnInit() {
    this.getSucursalList();
  }

  getSucursalList() {
    this.sucursales = SUCURSALES.filter(({empresa}) => {
      const idCurrent = typeof empresa === 'number' ? empresa: empresa.id;
      const idFilter = typeof this.empresa === 'number' ? this.empresa: this.empresa.id;
      return idCurrent === idFilter;
    })
  }

}
