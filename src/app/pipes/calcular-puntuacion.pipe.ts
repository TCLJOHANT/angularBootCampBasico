import { Pipe, PipeTransform } from '@angular/core';
import { IJugador } from '../models/Jugador.interface';

@Pipe({
  name: 'calcularPuntuacion'
})
export class CalcularPuntuacionPipe implements PipeTransform {

  transform(jugador: IJugador, ...args: unknown[]): String{
    let puntuacionTotal:number = 0;
    jugador.puntos.forEach(
      (puntuacion) => {
        puntuacionTotal += puntuacion;
      })
      return `${jugador.nombre} ha conseguido ${puntuacionTotal} puntos en total`
  }

}
