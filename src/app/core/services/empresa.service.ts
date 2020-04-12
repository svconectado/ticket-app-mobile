import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { MessageService } from './message.service';
import { ResourceService } from './resource.service';

import { Empresa } from '@core/models/empresa.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService extends ResourceService<Empresa> {
  private empresaSource = new BehaviorSubject<Empresa>(null);
  empresa$ = this.empresaSource.asObservable();

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) {
    super(environment.endpoints.empresa, http, messageService);
  }
}
