export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  fondo: string;
}

// Cambia nombres, precios y categorias por los reales.
// Las imagenes van en public/images/productos/
export const CATEGORIAS = ['Todos', 'Bebidas', 'Helados', 'Postres'];

export const PRODUCTOS: Producto[] = [
  { id: 1, nombre: 'Tropical Sunrise', categoria: 'Bebidas', precio: 18, imagen: 'images/productos/producto-1.png', fondo: '#e3e3e3' },
  { id: 2, nombre: 'Banana Split', categoria: 'Postres', precio: 30, imagen: 'images/productos/producto-2.png', fondo: '#e9bb47' },
  { id: 3, nombre: 'Copa Brosso', categoria: 'Helados', precio: 25, imagen: 'images/productos/producto-3.png', fondo: '#f0cfd2' },
];
