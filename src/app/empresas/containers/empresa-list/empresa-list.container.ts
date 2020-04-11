import { Component, OnInit, Input } from '@angular/core';

import { Empresa } from '@core/models/empresa.model';
import { TipoEmpresa } from '@core/models/tipo-empresa.model';

import { EMPRESAS } from '@core/const/empresas.const';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.container.html',
  styleUrls: ['./empresa-list.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class EmpresaListContainer implements OnInit {
  @Input() tipo: TipoEmpresa;
  @Input() empresas: Empresa[];

  constructor() { }

  ngOnInit() {
    this.getEmpresaList();
  }

  getEmpresaList() {
    this.empresas = EMPRESAS.filter(({tipo}) => {
      const idCurrent = typeof tipo === 'number' ? tipo: Number(tipo.id);
      const idFilter = typeof this.tipo === 'number' ? this.tipo: Number(this.tipo.id);
      return idCurrent === idFilter;
    });
  }

}
