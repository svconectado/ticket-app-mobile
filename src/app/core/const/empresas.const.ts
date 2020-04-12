import { Empresa } from '@core/models/empresa.model';
import { TIPO_EMPRESA } from './tipo-empresa.const';
import { SUCURSALES } from './sucursal.const';

export const EMPRESAS: Empresa[] = [
    {
        id: 1,
        nombre: 'BANCO DAVIVIENDA',
        nombreCorto: 'DAVIVIENDA',
        descripcion: null,
        tipo: TIPO_EMPRESA[0],
        imagen: 'https://demoscdn.blob.core.windows.net/imgs/banco-davivienda.png',
        sucursales: SUCURSALES
    },
    {
        id: 2,
        nombre: 'BANCO AGRÍCOLA',
        nombreCorto: 'AGRÍCOLA',
        descripcion: null,
        tipo: TIPO_EMPRESA[0],
        imagen: 'https://demoscdn.blob.core.windows.net/imgs/banco-agricola.png',
        sucursales: SUCURSALES
    },
    {
        id: 3,
        nombre: 'BANCO CUSCATLÁN',
        nombreCorto: 'CUSCATLÁN',
        descripcion: null,
        tipo: TIPO_EMPRESA[0],
        sucursales: SUCURSALES
    },
]