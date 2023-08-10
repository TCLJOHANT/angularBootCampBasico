import { Pipe, PipeTransform } from '@angular/core';
import { IContacto } from '../models/contacto.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto:IContacto, ...args: unknown[]):string{
    return `${contacto.nombre} ${contacto.apellido}`;
  }

}
