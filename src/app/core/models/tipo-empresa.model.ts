import { Resource } from './resource.model';

export interface TipoEmpresa extends Resource {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  color?: string;
}