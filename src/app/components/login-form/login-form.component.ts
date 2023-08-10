import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  loginForm:FormGroup = new FormGroup({})
  @Output() loginAction:EventEmitter<{}> = new EventEmitter(); //emitir valores de form a login-page

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.required]
    });
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  //submit de form de login
  submitLogin(){
    if(this.loginForm.valid){
      // console.table(this.loginForm.value);
      this.loginAction.emit(this.loginForm.value)
      this.loginForm.reset();
    }
  }
}
//'eve.holt@reqres.in','12345'