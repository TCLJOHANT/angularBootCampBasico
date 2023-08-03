import { Component } from '@angular/core';


export type producto = {
  nombre:String,
  precio:number,
  descricion:String
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent {
listaProductos:producto[] = [
{
  nombre : 'leche',
  precio : 290,
  descricion :'liquida'
},
{
  nombre : 'huevos',
  precio : 200,
  descricion :'podrido'
},
{
  nombre : 'pan',
  precio : 250,
  descricion :'dulce'
},


]
  cargando:Boolean = true;
  cambiarCargando(){
    this.cargando =!this.cargando
  }
  opcion:number = 0
  escogerOpcion(opcionEscogida:number){
    this.opcion = opcionEscogida

  }
}
