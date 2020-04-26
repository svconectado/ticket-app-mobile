import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MessageService } from './message.service';
import { ResourceService } from './resource.service';

import { Sucursal } from '@core/models/sucursal.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalService extends ResourceService<Sucursal> {

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) {
    super(environment.endpoints.sucursal, http, messageService);
  }

}
