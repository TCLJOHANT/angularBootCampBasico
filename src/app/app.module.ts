import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListsModule } from './modules/lists/list.module';
import { ListaContactoComponent } from './components/lista-contacto/lista-contacto.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioArraysComponent } from './components/forms/formulario-arrays/formulario-arrays.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component'; //mi modulo peronalizado
//importaciones de angular material
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    ListaContactoComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioArraysComponent,
    FormularioValidadoComponent,
    FormularioAnidadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule, //importo mi propio modulo
    HttpClientModule, BrowserAnimationsModule, //para hacer peticiones http
    ReactiveFormsModule, //para trabajar con forms reactivos
    //angular material
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
