import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IRandomContact } from 'src/app/models/ramdomUser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  token:String|null = null;
  constructor(private router:Router){ }
  contactoSeleccionado:IRandomContact|undefined;
  ngOnInit(): void {
    //comprobar si existre el token en el sessionStorege
    this.token = sessionStorage.getItem('token')
    
    //leer estado de historial de navegaciòn
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data
    }
  }
  
  navegarAContacts():void{
    //pasar info por ruta filtrando la informacion
    let navigationExtras:NavigationExtras ={
      queryParams:{
        sexo:'todos'
      }
    }
    this.router.navigate(['contacts'],navigationExtras );
  }
}
