import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Login } from './login.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Login ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
