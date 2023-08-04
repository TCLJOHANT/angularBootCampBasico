import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.scss']
})
export class ListaContactoComponent implements OnInit {
  //inteccion del servicio
    
  constructor(private contactoService:ContactoService){}
  //obtener contacto brindado por servicio
  contactoSelcionado :Contacto|undefined;
  listaContactos:Contacto[]=this.contactoService.obtenerContacto(); 
  ngOnInit(): void {
    console.table(this.listaContactos);
  }
  detallesContacto(id:number){
    // console.log('obtener datso de contacto con id'+ id)
    this.contactoSelcionado = this.contactoService.obtenerContactoPorID(id);
  }
}
