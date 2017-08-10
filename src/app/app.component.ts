import { Component } from '@angular/core';

@Component({
  selector: 'ps-ts',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  loggedIn = false;
  username: string;

  logIn(log: boolean) {
    this.loggedIn = log;
    console.log("logged",log);
  };

}
