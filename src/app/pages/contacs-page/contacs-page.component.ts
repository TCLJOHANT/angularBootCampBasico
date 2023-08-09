import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacs-page',
  templateUrl: './contacs-page.component.html',
  styleUrls: ['./contacs-page.component.scss']
})
export class ContacsPageComponent implements OnInit{
  filtroSexo:string = 'todos';
  listaContactos:IContacto []= []
  constructor(private router:Router, private route:ActivatedRoute , private contactsService:ContactsService){ }
  ngOnInit(): void {
    //obtener queryParams
    this.route.queryParams.subscribe((params:any)=>{
      console.log('QueryParams', params.sexo)
      this.filtroSexo = params.sexo
    })
    //obtener lista de contactos
    this.contactsService.obtenerContactos(this.filtroSexo)
    .then(
      (lista)=>this.listaContactos = lista)
    .catch((error)=>console.error(`ha habido un error al obtener contactos ${error}`))
    .finally(()=>console.info('peticion de contactoas terminada'))
  }
  //ejemplo paso de informacion entre componenytes a traves del estado
  volverAHome(contacto:IContacto){
    let navigationExtras:NavigationExtras ={
      state:{
        data:contacto
      }
    }
    this.router.navigate(['/home'],navigationExtras)
  }

}
