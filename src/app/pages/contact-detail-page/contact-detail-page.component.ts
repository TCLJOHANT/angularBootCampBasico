import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contacto.interface';


@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit{
  id:any|undefined;
  filtroPrevio:string ='todos'
  contacto:IContacto ={
      id:0,
      nombre:'',
      apellido:'',
      email:'',
      sexo:''
    };
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params:any)=>{
        if(params.id){
          this.id = params.id
        }
      }
    )
    //leer el state el contacto
    if(history.state.data){
      this.contacto = history.state.data;
    }
    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro;

    }
  }
}
