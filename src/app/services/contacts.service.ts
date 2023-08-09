import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContacto } from '../models/contacto.interface';
import { LISTACONTACTOS } from '../mock/contacts.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  listaContactos:IContacto[] = LISTACONTACTOS;//lista del mock
  constructor(private http:HttpClient) {}
  //funcion usa
  obtenerContactos(sexo?:string):Promise<IContacto[]>{
    if(sexo=='hombre' || sexo == 'mujer'){
      let listaFiltrada :IContacto[]=this.listaContactos.filter((contacto)=> contacto.sexo ==sexo);
      return Promise.resolve(listaFiltrada)
    }
    else if(sexo=='todos'){
      return Promise.resolve(this.listaContactos)
    }
    else{
      return Promise.reject('filtro no valido')
    }
  }
}
