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
export class EmpresasPage {

  constructor() { }

}
