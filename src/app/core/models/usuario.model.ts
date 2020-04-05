import { Resource } from './resource.model';
import { Sucursal } from './sucursal.model';

export interface Usuario extends Resource {
  email?: string;
  isActive?: boolean;
  password?: string;
  lastLogin?: Date;
  isSuperuser?: boolean;
  username?: string;
  firstName?: string;
  lastName?: string;
  isStaff?: boolean;
  dateJoined?: Date;
  telefono?: string;
  rol?: number;
  sucursal?: Sucursal | number;
}