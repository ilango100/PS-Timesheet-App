import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'ps-ts',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  loggedIn = false;
  username: string;

  constructor(private appserv:AppService) {
  }

  logIn(log: boolean) {
    this.loggedIn = log;
    console.log("logged",log);
    if (log) {
      this.appserv.loginTime=new Date();
    }
  };

  logOut() {
    console.log("logged out");
    this.appserv.logoutTime = new Date();
  }

}
