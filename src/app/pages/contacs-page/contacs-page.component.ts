import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contacto.interface';
import { IRandomContact,Results} from 'src/app/models/ramdomUser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacs-page',
  templateUrl: './contacs-page.component.html',
  styleUrls: ['./contacs-page.component.scss']
})
export class ContacsPageComponent implements OnInit{
  filtroSexo:string = 'todos';
  listaRandomContacts:IRandomContact[]=[];
  constructor(private router:Router, private route:ActivatedRoute ,private randomUserService:RandomUserService){ }
  ngOnInit(): void {
    //obtener queryParams
    this.route.queryParams.subscribe((params:any)=>{
      console.log('QueryParams', params.sexo)
      this.filtroSexo = params.sexo
      if(params.sexo === 'female' || params.sexo === 'male'){
        this.randomUserService.obtenerRandomContacts(10,params.sexo).subscribe
        (
          {
            next: (response:Results)=>{
             response.results.forEach((randomContact:IRandomContact,index:number)=>{
               this.listaRandomContacts.push(randomContact);
             })
             console.log(this.listaRandomContacts);
            },
            error:(error)=> console.error(`${error}`),
            complete:()=> console.info('peticion de random contact terminada')
           
         }
         );
      }else{

        //implementacion para optener lista de contactos aleatorios
            this.randomUserService.obtenerRandomContacts(10).subscribe(
              {
                 next: (response:Results)=>{
                  response.results.forEach((randomContact:IRandomContact,index:number)=>{
                    this.listaRandomContacts.push(randomContact);
                  })
                  console.log(this.listaRandomContacts);
                 },
                 error:(error)=> console.error(`${error}`),
                 complete:()=> console.info('peticion de random contact terminada')
                
              });
      }
    })
  }




  //ejemplo paso de informacion entre componenytes a traves del estado
  volverAHome(contacto:IRandomContact){
    let navigationExtras:NavigationExtras ={
      state:{
        data:contacto
      }
    }
    this.router.navigate(['/home'],navigationExtras)
  }

}
