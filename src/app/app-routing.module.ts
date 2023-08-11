import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContacsPageComponent } from './pages/contacs-page/contacs-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

const routes: Routes = [
  //redirige ruta vacía a la ruta '/home'. Es decir, si se navega
  // a la raíz, será redirigido  a la página de inicio ('/home').
  {
    path : '',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'home',
    component:HomePageComponent,
    canActivate:[authGuard],
    //rutas hijas
    children:[
      {
        path:'hija',
        component:HomePageComponent
      }
    ]
  },
 
  {
    path:'contacts',
    component:ContacsPageComponent,
    canActivate: [authGuard]
  },
  {
    path:'contacts/:id',
    component:ContactDetailPageComponent,
    canActivate: [authGuard]
  },
  {
    path:'random',
    component:RandomContactPageComponent,
    canActivate:[authGuard]
  },
  //Si el usuario navega a una ruta que no existe en la aplicación, se cargará el componente notfountPage
  {
    path:'**',
    component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

