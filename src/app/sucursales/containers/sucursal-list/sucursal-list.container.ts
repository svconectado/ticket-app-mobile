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
  private auxSucursales: Sucursal[];
  public searching = false;
  public searchValue = '';
  constructor() { }

  ngOnInit() {
    this.getSucursalList();
  }

  getSucursalList() {
    this.searching = true;
    this.sucursales = SUCURSALES.filter(({empresa}) => {
      const idCurrent = typeof empresa === 'number' ? empresa: empresa.id;
      const idFilter = typeof this.empresa === 'number' ? this.empresa: this.empresa.id;
      return idCurrent === idFilter;
    });
    this.searching = false;
    this.auxSucursales = this.sucursales;
  }

  filterSucursalList($event: Event) {
    this.searching = true;
    this.searchValue = ($event.target as HTMLInputElement).value.trim();
    this.sucursales = this.sucursales.filter((sucursal: Sucursal) => {
      return (
        sucursal.nombre.toLowerCase().includes(this.searchValue) ||
        sucursal.direccion?.toLowerCase().includes(this.searchValue))
    })
    this.searching = false;
  }

  clearSucursalList() {
    this.searchValue = '';
    this.sucursales = this.auxSucursales;
  }

}
