import { Time } from '@angular/common';

import { Dia } from '@core/enums/dia.enum';
import { Resource } from './resource.model';
import { Sucursal } from './sucursal.model';

export interface Horario extends Resource {
    horaApertura: Time | string;
    horaCierre: Time | string;
    dia: Dia;
    sucursal: Sucursal | number;
}