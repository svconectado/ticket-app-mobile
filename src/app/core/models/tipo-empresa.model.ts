import { Resource } from './resource.model';

export interface TipoEmpresa extends Resource {
  tipo: string;
  descripcion?: string;
  imagen?: string;
  color?: string;
}