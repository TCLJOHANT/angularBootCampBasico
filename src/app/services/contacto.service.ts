import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { Contacto } from '../models/contacto.interface';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
  obtenerContacto():Contacto []{
    return CONTACTOS;
  }
  obtenerContactoPorID(id:number):Contacto|undefined{
    const contacto = CONTACTOS.find((contacto:Contacto)=>contacto.id===id);
    if(contacto){
      return contacto;
    }else{
      return;
    }
  }
}
