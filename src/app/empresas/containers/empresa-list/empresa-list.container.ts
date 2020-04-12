import { LoadingController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

import { Empresa } from '@core/models/empresa.model';
import { TipoEmpresa } from '@core/models/tipo-empresa.model';

import { EmpresaService } from '@core/services/empresa.service';
import { ListContainer } from '@shared/containers/list/list.container';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.container.html',
  styleUrls: ['./empresa-list.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class EmpresaListContainer extends ListContainer<Empresa> implements OnInit {
  @Input() tipo: TipoEmpresa;

  constructor(
    private empresaService: EmpresaService,
    protected loadingCtrl: LoadingController
  ) {
    super(empresaService, loadingCtrl);
  }

  ngOnInit() {
    this.params.tipoempresa = this.tipo.id
    this.getList();
  }

}
