import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms'; 
@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {
  //definicion de formulario
  miFormularioAnidado:FormGroup = new FormGroup({});
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    //agrupacion para telefono
    const telefonoFijo =this.formBuilder.group( {
      prefijo:'',
      numero:''
    })
    const telefonoMovil = this.formBuilder.group({
      prefijo:'',
      numero:''
    })
    //agrupacion de formulario que ontiene dos agrupaciones
    this.miFormularioAnidado = this.formBuilder.group({
      telefonoFijo:telefonoFijo,
      telefonoMovil:telefonoMovil
    })
  }
}
