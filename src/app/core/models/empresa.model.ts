import { Resource } from './resource.model';
import { TipoEmpresa } from './tipo-empresa.model';
import { Usuario } from './usuario.model';
import { Sucursal } from './sucursal.model';

export interface Empresa extends Resource {
    nombre: string;
    nombreCorto?: string;
    descripcion?: string;
    nit?: string;
    tipo?: TipoEmpresa | number;
    administrador?: Usuario | number;
    imagen?: string;
    sucursales?: Sucursal[];
}