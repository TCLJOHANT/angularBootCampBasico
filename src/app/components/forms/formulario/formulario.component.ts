import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms'; //FormBuilder contruir form, formGroup = 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  //definicion de formulario
   miFormulario:FormGroup = new FormGroup({});
   constructor(private formBuilder:FormBuilder){}
   ngOnInit(): void {
    //iniciar fromulario y sus campos por defecto
     this.miFormulario = this.formBuilder.group({
      nombre:'',
      apellidos:'',
      email:'',
      telefono:'',
      direccion:''
     })
     //subscuirpcion a cambio de forms y mostrar por consola
     this.miFormulario.valueChanges.subscribe(
      console.log
     )

   }

}
