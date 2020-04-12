import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MessageService } from './message.service';
import { ResourceService } from './resource.service';

import { TipoEmpresa } from '@core/models/tipo-empresa.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpresaService extends ResourceService<TipoEmpresa> {

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) {
    super(environment.endpoints.tipoEmpresa, http, messageService);
  }

}
