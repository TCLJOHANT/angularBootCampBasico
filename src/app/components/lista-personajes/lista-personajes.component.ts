import { Component } from '@angular/core';
import { Personaje } from 'src/app/models/interfaces/personaje.interface';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent {
  personaje1:Personaje ={
    nombre:'hitt',
    universo:6,
    esBueno:true,
    urlImg:'assets/IMG/',
  } 
  personaje2:Personaje ={
    nombre:'cell',
    universo:7,
    esBueno:false,
    urlImg:'assets/IMG/',
  } 
  eliminarPersonaje(personaje:Personaje){
    alert('se procede a elimiar a '+ personaje.nombre)
  }
}
