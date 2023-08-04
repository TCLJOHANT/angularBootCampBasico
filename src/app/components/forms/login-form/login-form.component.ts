import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in','cityslicka').subscribe(
      (response)=>{
        console.log('Respuesta Loguin',response);
        if (response.token) {
          sessionStorage.setItem('token', response.token);
        } else {
          console.log('no hay token');
        }
      },
      (error) => console.error(`ha ocurrido error en proceso de loguin ${error}`),
      () => console.info('se ha compleytado la llamada de loguina REQRES')
    );

  }
}
