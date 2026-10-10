import { Component, input, output } from '@angular/core';
import { Producto } from '../../datos/productos';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.scss',
})
export class ProductoCard {
  producto = input.required<Producto>();
  agregar = output<Producto>();
}
