import { Component } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';

@Component({
  selector: 'app-contacs-page',
  templateUrl: './contacs-page.component.html',
  styleUrls: ['./contacs-page.component.scss']
})
export class ContacsPageComponent {
  contacts:IContacto [] =[
    {
          id: 1,
          nombre: "Juan",
          apellido: "Pérez",
          email: "juan@example.com"
      },
      
      {
          id: 2,
          nombre: "María",
          apellido: "Gómez",
          email: "maria@example.com"
      },
  
      {
          id: 3,
          nombre: "Pedro",
          apellido: "López",
          email: "pedro@example.com"
      }
  ]
}
