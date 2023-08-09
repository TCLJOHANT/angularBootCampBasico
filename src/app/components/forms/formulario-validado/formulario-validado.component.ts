import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'; 
@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit{
   //definicion de formulario
   miFormularioValidado:FormGroup = new FormGroup({});
   constructor(private formBuilder:FormBuilder){}
   ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
        nombre: ['',Validators.required],//campo obligatorio
        apellidos:'',
        edad:['',Validators.compose([Validators.required,Validators.min(18), Validators.max(99)])], //campo obligatorio con valores minimos y maximo
        email:['',Validators.compose([Validators.required,Validators.email])], //obligatorio y de tipo email
        password:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],//Obligatorio y con expresion regular
        acepta:[false,Validators.requiredTrue] //campo boleano con true como obligatorio
    })
  }
  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }
  get apellidos(){
    return this.miFormularioValidado.get('apellidos');
  }
  get edad(){
    return this.miFormularioValidado.get('edad');
  }
  get email(){
    return this.miFormularioValidado.get('email');
  }
  get password(){
    return this.miFormularioValidado.get('password');
  }
  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }
  //metodo submit de form
  enviarFormulario(){
    //controlar que form sea valido
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value);
      //resetear campos del form
      this.miFormularioValidado.reset();
    }
  }
}
