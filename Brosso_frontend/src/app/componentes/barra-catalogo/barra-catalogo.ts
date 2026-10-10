import { Component, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-barra-catalogo',
  templateUrl: './barra-catalogo.html',
  styleUrl: './barra-catalogo.scss',
})
export class BarraCatalogo {
  categorias = input<string[]>([]);
  busqueda = model('');
  categoria = model('Todos');
  abierto = signal(false);

  alBuscar(evento: Event) {
    this.busqueda.set((evento.target as HTMLInputElement).value);
  }

  elegir(categoria: string) {
    this.categoria.set(categoria);
    this.abierto.set(false);
  }
}
