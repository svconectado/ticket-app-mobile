import { Resource } from './resource.model';
import { Horario } from './horario.model';
import { Municipio } from './municipio.model';
import { Empresa } from './empresa.model';

export interface Sucursal extends Resource {
  nombre: string;
  imagen?: string;
  telefono?: string;
  latitud: number;
  longitud: number;
  direccion?: string;
  empresa: Empresa | number;
  horarios: Horario[] | string[] | string;
  municipio?: Municipio | number;
}