import { Resource } from './resource.model';

import { Rol } from '@core/enums/rol.enum';
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
  rol?: Rol | number;
  sucursal?: Sucursal | number;
}