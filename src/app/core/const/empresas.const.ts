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
        imagen: 'http:\/\/davivienda.buzzcoapp.com\/cms\/IMG_U\/davivienda.png',
        sucursales: SUCURSALES
    }
]