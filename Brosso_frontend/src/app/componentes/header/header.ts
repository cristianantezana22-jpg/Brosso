import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cantidadCarrito = input(0);
  menuAbierto = signal(false);

  enlaces = [
    { texto: 'Misión', href: '#mision' },
    { texto: 'Visión', href: '#vision' },
    { texto: 'Contáctanos', href: '#contacto' },
    { texto: 'Delivery', href: '#delivery' },
  ];

  alternarMenu() {
    this.menuAbierto.update((v) => !v);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}
