import { Resource } from './resource.model';
import { Municipio } from './municipio.model';

export interface Sucursal extends Resource {
  nombre: string;
  imagen?: string;
  telefono?: string;
  latitud: number;
  longitud: number;
  direccion?: string;
  empresa: 0;
  municipio?: Municipio | number;
}