import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { Contacto } from '../models/contacto.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
  //usando promesa :  se resuelve con una matriz de objetos de tipo  Contacto
  obtenerContacto():Promise<Contacto []> {
    return Promise.resolve(CONTACTOS);
  } 
  //usando Observable
  obtenerContactoPorID(id:number):Observable<Contacto>|undefined {
    //buscardo contacto por id dentro de la lista en mockeados
    const contacto = CONTACTOS.find((contacto:Contacto)=>contacto.id===id);
    //creacion de observable
    let observable:Observable<Contacto> = new Observable(observer =>{
      observer.next(contacto); //emite valor a todo componente subsrito
      observer.complete()// ya no emite mas valores
    })
    if(contacto){
      return observable;
    }else{
      return;
    }
  }
}
