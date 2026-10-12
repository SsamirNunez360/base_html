import { Component, signal, computed } from '@angular/core';
import { Saludo } from './saludo/saludo';
import { PerfilEstudiante } from './perfil-estudiante/perfil-estudiante';

@Component({
  selector: 'app-root',
  imports: [Saludo, PerfilEstudiante],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly nombre = signal('Ssamir');
  readonly asignatura = signal('Programación Web');
  readonly contador = signal(0);

  // Mejora: Señal computada para evaluar si el contador es cero
  readonly botonDeshabilitado = computed(() => this.contador() === 0);

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