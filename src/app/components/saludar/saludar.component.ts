import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent {
  //significa que va a recibir el valor
  @Input() nombre:String = 'anonimo';
  @Output()mensajeEmitter:EventEmitter<String> = new EventEmitter();
  //funcion que no retorna nada solo hace una accion
  alertSaludar():void{
    alert(this.nombre + '  bienvenido campeon')
  }
  pasarmsgaPadre():void{
    this.mensajeEmitter.emit('e mooro  ' + this.nombre + '  soy despachado desde un click')
  }

 
}
