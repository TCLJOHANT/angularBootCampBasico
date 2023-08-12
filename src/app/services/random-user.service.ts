import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IRandomContact, Results } from '../models/ramdomUser';
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  constructor(private http:HttpClient) { }
  urlApi:string = 'https://randomuser.me/api';

  handleError(error:HttpErrorResponse){
    if(error.status ===0){
      console.error(`ha ocurrido un error: ${error}`)
    }else{
      console.error(`error en el backend:${error.status}. el error es ${error.error}`)
    }
    return throwError(()=> new Error('Error en la petición de l contacto aleatorio'))
  }
  obtenerRandomContact():Observable<Results>{
    return this.http.get<Results>(this.urlApi).pipe(
      retry(2),//Nº de reitentos de peticiones
      catchError(this.handleError)) //sacamos error si algo falla 
  }
   obtenerRandomContacts(n:number,sexo?:string):Observable<Results>{
      let params:HttpParams = new HttpParams().set("results",n)
      if(sexo){
        params = params.append("gender",sexo);
      }
      return this.http.get<Results>(this.urlApi,{params:params}).pipe(
        retry(2),//Nº de reitentos de peticiones
        catchError(this.handleError)) //sacamos error si algo falla 
   }


}

