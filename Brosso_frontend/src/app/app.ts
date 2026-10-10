import { Component, signal } from '@angular/core';
import { Header } from './componentes/header/header';
import { Carrusel } from './componentes/carrusel/carrusel';
import { Catalogo } from './componentes/catalogo/catalogo';
import { Producto } from './datos/productos';

@Component({
  selector: 'app-root',
  imports: [Header, Carrusel, Catalogo],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  carrito = signal<Producto[]>([]);

  agregar(producto: Producto) {
    this.carrito.update((lista) => [...lista, producto]);
  }
}
