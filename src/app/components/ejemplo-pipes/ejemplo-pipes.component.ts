import { Component } from '@angular/core';
import { IJugador } from 'src/app/models/Jugador.interface';
@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent {
  dob:Date = new Date(2005,5,12)
  cambio:boolean = true;
  numero_Pi:number=3.1415926535897;
  precioCarrito:number = 100;
  cantidad:number= 0.3512;
  textoLargo:string ="snsfbre wofefmv mfehfnejm lkvifoemfalsfjweio";
  //Ejemplo para pipe calcular puntuacion
  jugador1: IJugador = {
    nombre: "Mike Towers",
    puntos: [10, 20, 30, 40]
  };
  
  jugador2: IJugador = {
    nombre: "Anuel AA",
    puntos: [5, 15, 25, 35]
  };
  get dateFormat(){
    return this.cambio? 'shortDate':'fullDate';
  }
  cambiarFormato(){
    this.cambio = !this.cambio;
  }
}
