import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  protected a = 0;
  protected b = 0;
  protected resultado: number | string = 0;

  protected sumar(): void {
    this.resultado = this.a + this.b;
  }

  protected restar(): void {
    this.resultado = this.a - this.b;
  }

  protected multiplicar(): void {
    this.resultado = this.a * this.b;
  }

  protected dividir(): void {
    this.resultado = this.b === 0 ? 'No se puede dividir entre cero' : this.a / this.b;
  }

  protected limpiar(): void {
    this.a = 0;
    this.b = 0;
    this.resultado = 0;
  }
}
