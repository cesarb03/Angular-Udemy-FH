import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iroman';
  edad: number = 34;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambioNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambioEdad(): void {
    console.log('Hey....')
    this.edad = 45;
  }
}
