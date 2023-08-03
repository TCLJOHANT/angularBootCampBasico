import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBotcampBas';
  nombre = 'Kakaroto';
  //recibe lo que el componente hijo envia
  recibirMensajeHijo(mensaje:String){
    alert(mensaje);
  }
}
