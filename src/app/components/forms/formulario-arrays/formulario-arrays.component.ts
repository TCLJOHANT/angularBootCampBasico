import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray } from '@angular/forms'; 
@Component({
  selector: 'app-formulario-arrays',
  templateUrl: './formulario-arrays.component.html',
  styleUrls: ['./formulario-arrays.component.scss']
})
export class FormularioArraysComponent implements OnInit{
    //definicion de formulario
    miFormularioArray:FormGroup = new FormGroup({});
    constructor(private formBuilder:FormBuilder){}
    ngOnInit(): void {
      this.miFormularioArray = this.formBuilder.group({
        nombre:'',
        apellidos:'',
        telefonos: this.formBuilder.array([])
      })
    }
    //geter para obtener el form array de la lista de telefonos
    get telefonosFormulario():FormArray{
      return this.miFormularioArray.get('telefonos') as FormArray
    }
    //añadir telefonos a lista
    anadirTelefono(){
      //creacion grupo telefono
      const telefonoNuevo = this.formBuilder.group({
        prefijo:'',
        numero: ''
      });
      //añadir el grupo la lista de telefonos
      this.telefonosFormulario.push(telefonoNuevo);
    }
    //eliminar telefono de la lista
    eliminarTelefono(index:number){
      this.telefonosFormulario.removeAt(index);
    }
}
