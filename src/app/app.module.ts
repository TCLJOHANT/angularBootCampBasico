import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajeFormComponent } from './components/personaje-form/personaje-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginpageComponent } from './components/pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/pages/registerpage/registerpage.component';
import { NotFoundpageComponent } from './components/pages/not-foundpage/not-foundpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './components/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    PersonajeComponent,
    PersonajeFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LoginpageComponent,
    RegisterpageComponent,
    NotFoundpageComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
