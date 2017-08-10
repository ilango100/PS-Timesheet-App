import { Component } from '@angular/core';

@Component({
  selector: 'ps-ts',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  loggedIn = false;
  username: string;

  loginTime: Date;
  logoutTime: Date;

  logIn(log: boolean) {
    this.loggedIn = log;
    console.log("logged",log);
    if (log) {
      this.loginTime=new Date();
    }
  };

  logOut() {
    console.log("logged out");
    this.logoutTime = new Date();
  }

}
