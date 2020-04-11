import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoEmpresa } from '@core/models/tipo-empresa.model';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss'],
})
export class PrimaryComponent implements OnInit {

  tipoEmpresa: TipoEmpresa;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      this.tipoEmpresa = params.params as TipoEmpresa;
    });
  }
}
