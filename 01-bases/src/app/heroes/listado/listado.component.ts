import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Alumno 1', 'Alumno 2', 'Alumno 3', 'Alumno 4'];
  alumnoBorrado: string = '';

  borrarAlumno(): void {
    this.alumnoBorrado = this.heroes.shift() || '';
    // this.heroes.pop();
    // delete this.heroes[1];
    // this.heroes.splice(0, 1);
    // this.heroes = [];
  }
}
