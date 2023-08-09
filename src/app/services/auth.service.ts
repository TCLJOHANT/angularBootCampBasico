import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  //login de usuario con api Reqres
  login(email:String,password:String):Observable<any>{
    let body = {
      email:email,
      password:password,
    }
    return this.http.post('https://reqres.in/api/login',body)
  }
}
