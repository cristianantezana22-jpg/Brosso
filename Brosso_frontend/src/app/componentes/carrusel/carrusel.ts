import { Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.scss',
})
export class Carrusel {
  // Pon tus banners en public/images/banner/
  slides = [
    { src: 'images/banner/slide-1.jpg', alt: 'Brosso, tu lugar favorito: helados y parrilla' },
    // { src: 'images/banner/slide-2.jpg', alt: '...' },
  ];

  actual = signal(0);

  constructor() {
    if (this.slides.length > 1) {
      const id = setInterval(() => this.siguiente(), 6000);
      inject(DestroyRef).onDestroy(() => clearInterval(id));
    }
  }

  anterior() {
    this.actual.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  siguiente() {
    this.actual.update((i) => (i + 1) % this.slides.length);
  }
}
