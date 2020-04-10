import { Component, OnInit } from '@angular/core';
import { Empresa } from '@core/models/empresa.model';
import { TipoEmpresa } from '@core/models/tipo-empresa.model';
import { TipoEmpresaService } from '@core/services/tipo-empresa.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {
  // tipo$: Observable<TipoEmpresa>;
  tipoEmpresa: TipoEmpresa;
  defaultImageUrl = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';

  empresas: Empresa[] = [
    {
      id: 1,
      nombre: 'Banco Agricola'
    },
    {
      id: 2,
      nombre: 'Banco Cuscatlan'
    },
    {
      id: 3,
      nombre: 'Banco Davivienda'
    }
  ]
  constructor(
    private route: ActivatedRoute,
    private tipoEmpresaService: TipoEmpresaService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      this.tipoEmpresa = params.params as TipoEmpresa;
    });
  }

}
