import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { FormsModule } from '@angular/forms';
import { ListsModule } from './modules/lists/list.module'; //mi modulo peronalizado

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule //importo mi propio modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
