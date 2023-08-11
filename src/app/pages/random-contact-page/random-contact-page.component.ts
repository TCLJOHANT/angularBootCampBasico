import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/ramdomUser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {
  Contact:IRandomContact | undefined;
  constructor(private randomUserSevice:RandomUserService){}

  obtenerNuevoContacto():void{
    this.randomUserSevice.obtenerRandomContact().subscribe(
      {
         next: (response:Results)=>{
         this.Contact = response.results[0]; //se lo pasamos al randomUser
         },
         error:(error)=> console.error(`${error}`),
         complete:()=> console.info('peticion de random contact terminada')
        
      });
    }
  ngOnInit(): void {
    this.obtenerNuevoContacto()
  }
  obtenerListaContactos(n:number){
    this.randomUserSevice.obtenerRandomContacts(n).subscribe(
      {
         next: (response:Results[])=>{
          console.log(response)
         },
         error:(error)=> console.error(`${error}`),
         complete:()=> console.info('peticion de random contact terminada')
        
      });
  }
}
