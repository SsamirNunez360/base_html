import { Component, signal } from '@angular/core';
import { Saludo } from './saludo/saludo';
import { PerfilEstudiante } from './perfil-estudiante/perfil-estudiante';

@Component({
  imports: [Saludo, PerfilEstudiante],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Señal base proporcionada en su código
  protected readonly title = signal('hola-angular');

  // Señales requeridas por la guía y ejercicios
  readonly nombre = signal('Ssamir');
  readonly asignatura = signal('Programación Web');
  readonly contador = signal(0);

  // Métodos de interacción
  incrementar(): void {
    this.contador.update(valor => valor + 1);
  }

  sumarCinco(): void {
    this.contador.update(valor => valor + 5);
  }

  restarUno(): void {
    this.contador.update(valor => Math.max(0, valor - 1));
  }

  reiniciar(): void {
    this.contador.set(0);
  }
}