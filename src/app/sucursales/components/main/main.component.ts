import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Empresa } from '@core/models/empresa.model';
import { EMPRESAS } from '@core/const/empresas.const';
import { EmpresaService } from '@core/services/empresa.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  empresa: Empresa = EMPRESAS[0];

  constructor(
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.subscription = this.empresaService.empresa$.subscribe((empresa: Empresa) => {
      this.empresa = EMPRESAS[0];
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
