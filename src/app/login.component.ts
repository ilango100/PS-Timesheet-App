import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
})

export class LoginComponent {
    user: string;
    pass: string;
    register = false;
    wrong = false;
    @Output() loggedIn = new EventEmitter<boolean>();

    constructor(private http: HttpClient) {
    }

    submit() {
        //Send user pass data
        this.http.post('/login',{
            user: this.user,
            pass: this.pass,
        },{
            responseType: 'json',
        }).subscribe(data => {
            this.loggedIn.emit(data['login']);
            this.wrong = !data['login'];
        }, err => {
            console.log(err);
        })
    };

    registerClicked() {
    //Register method
    this.register = !this.register;
    };
}

