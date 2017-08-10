import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { BreakComponent } from './break.component';
import { DetailsComponent } from './details.component';
import { AppService } from './app.service';

const routs: Routes = [
  {
    path: '',
    redirectTo: '/details',
    pathMatch: 'full',
  },
  {
    path: 'break',
    component: BreakComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  }
];

@NgModule({
  imports:      [
    RouterModule.forRoot(routs),
    BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, LoginComponent, BreakComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AppService ]
})
export class AppModule { }
