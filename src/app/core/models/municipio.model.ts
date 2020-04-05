import { Resource } from './resource.model';
import { Departamento } from './departamento.model';

export interface Municipio extends Resource {
  nombre: string;
  departamento: Departamento | number;
}