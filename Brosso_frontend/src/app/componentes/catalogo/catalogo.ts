import { Component, computed, output, signal } from '@angular/core';
import { BarraCatalogo } from '../barra-catalogo/barra-catalogo';
import { ProductoCard } from '../producto-card/producto-card';
import { CATEGORIAS, PRODUCTOS, Producto } from '../../datos/productos';

@Component({
  selector: 'app-catalogo',
  imports: [BarraCatalogo, ProductoCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {
  agregar = output<Producto>();

  categorias = CATEGORIAS;
  busqueda = signal('');
  categoria = signal('Todos');

  filtrados = computed(() => {
    const q = this.busqueda().trim().toLowerCase();
    const cat = this.categoria();
    return PRODUCTOS.filter(
      (p) => (cat === 'Todos' || p.categoria === cat) && p.nombre.toLowerCase().includes(q),
    );
  });
}
