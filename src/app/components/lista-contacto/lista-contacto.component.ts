import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.scss']
})
export class ListaContactoComponent implements OnInit, OnDestroy {
  constructor(private contactoService:ContactoService){}
  //subscripcion del servicio
  subscripcion: Subscription |undefined;
  //obtener contacto brindado por servicio
  contactoSelcionado :Contacto|undefined;
  listaContactos:Contacto[]=[]; 
  //usando promesa
  ngOnInit(): void {
    this.contactoService.obtenerContacto()
    .then((lista:Contacto[])=>this.listaContactos = lista)
    .catch((error)=>console.error(`Ha habido un errro al recueral la lista de contactos ${error}`))
    .finally(()=>console.log('peticion de lista de contactos terminada'))
  }
  //usando observable
  detallesContacto(id:number){
    // console.log('obtener datso de contacto con id'+ id)
    this.subscripcion = this.contactoService.obtenerContactoPorID(id)?.subscribe(
    (contacto:Contacto)=> this.contactoSelcionado=contacto)
  }

  //desuscribirme
  ngOnDestroy(): void {
    this.subscripcion?.unsubscribe();
  }
}
