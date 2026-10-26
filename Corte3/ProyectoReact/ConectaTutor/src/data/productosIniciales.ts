/**
 * TIPOS DEL PROYECTO
 * Aquí describimos la "forma" de los datos. TypeScript revisa que todo el código la respete.
 */

/** `as const` convierte el arreglo en una lista de valores fijos (no se puede cambiar). */
export const CATEGORIAS = ['Bebidas calientes', 'Bebidas frías', 'Panadería', 'Postres'] as const;

/** Tipo unión: 'Bebidas calientes' | 'Bebidas frías' | 'Panadería' | 'Postres' */
export type Categoria = (typeof CATEGORIAS)[number];

/** Con esta cantidad de unidades (o menos) un producto se considera "pocas unidades". */
export const UNIDADES_MINIMAS = 5;

/** Un producto del menú. */
export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: Categoria; // solo acepta uno de los 4 valores de CATEGORIAS
  precio: number;
  unidades: number; // unidades disponibles hoy
}

/**
 * Datos que llegan del formulario para crear o editar.
 * Omit<> copia la interfaz Producto quitando el id (el id lo generamos nosotros).
 */
export type ProductoDatos = Omit<Producto, 'id'>;




import type { Producto } from '../types/producto';

/**
 * DATOS DE EJEMPLO
 * Son el valor inicial del estado. Más adelante vendrían de un servidor (API).
 * 🧪 Prueba: cambia una categoría por 'Comida rápida' y mira el error de TypeScript.
 */
export const productosIniciales: Producto[] = [
  {
    id: '1',
    nombre: 'Café tinto',
    descripcion: 'El clásico colombiano, suave y aromático.',
    categoria: 'Bebidas calientes',
    precio: 3500,
    unidades: 30,
  },
  {
    id: '2',
    nombre: 'Capuchino',
    descripcion: 'Espresso con leche espumada y canela.',
    categoria: 'Bebidas calientes',
    precio: 7000,
    unidades: 4,
  },
  {
    id: '3',
    nombre: 'Limonada de coco',
    descripcion: '',
    categoria: 'Bebidas frías',
    precio: 9500,
    unidades: 12,
  },
  {
    id: '4',
    nombre: 'Pandebono',
    descripcion: 'Recién horneado, con queso costeño.',
    categoria: 'Panadería',
    precio: 2500,
    unidades: 0,
  },
  {
    id: '5',
    nombre: 'Almojábana',
    descripcion: 'Suave y esponjosa, ideal con chocolate.',
    categoria: 'Panadería',
    precio: 2800,
    unidades: 20,
  },
  {
    id: '6',
    nombre: 'Postre de natas',
    descripcion: 'Receta tradicional de la abuela.',
    categoria: 'Postres',
    precio: 8000,
    unidades: 3,
  },
];

