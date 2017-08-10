import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'ps-ts',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  loggedIn = false;
  username: string;
  logoutClicked = false;
  workTime: number;

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
    this.appserv.logoutTime = new Date();
    this.workTime = this.appserv.calcTime();
    this.logoutClicked = true;
    console.log("used time",this.appserv.calcTime())
  }

  exit() {
    location.reload();
  }

}
