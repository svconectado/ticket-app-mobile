import { Resource } from './resource.model';
import { Municipio } from './municipio.model';

export interface Departamento extends Resource {
    nombre: string;
    municipios: Municipio[];
}