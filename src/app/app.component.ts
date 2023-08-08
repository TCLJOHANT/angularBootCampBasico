import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:String = '';
  token:String |null = '';
  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
  }
  constructor(private router:Router){}
  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
