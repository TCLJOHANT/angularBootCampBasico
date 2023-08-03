import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    //exporto este componente y lo puedo usar en otros modulos
    ListaBasicaComponent
  ]
})
export class ListsModule { }
