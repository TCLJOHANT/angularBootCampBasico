import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from 'src/app/models/interfaces/personaje.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent {
  @Input() personaje:Personaje|undefined;
  @Output() eliminarPsj:EventEmitter<Personaje> = new EventEmitter()

  eliminar(){
    console.log("eliminar personaje," + this.personaje?.nombre)
    this.eliminarPsj.emit(this.personaje) //notificamos al componente padre personaje a eliminar
  }
}
