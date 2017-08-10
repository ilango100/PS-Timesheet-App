import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { BreakComponent } from './break.component';

const routs: Routes = [
  {
    path: '',
    redirectTo: '/break',
    pathMatch: 'full',
  },
  {
    path: 'break',
    component: BreakComponent,
  }
];

@NgModule({
  imports:      [
    RouterModule.forRoot(routs),
    BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, LoginComponent, BreakComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
