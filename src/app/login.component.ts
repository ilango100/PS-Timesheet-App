import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
})

export class LoginComponent {
    user: string;
    pass: string;
    dob: Date;
    email: string;

    register = false;
    userExists = false;
    passWrong = false;
    emailWrong = false;
    emailExists = false;
    smErr = false;
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
            this.passWrong = !data['login'];
        }, err => {
            console.log(err);
        })
    };

    registerClicked() {
    //Register method
    if (this.register) {
        this.http.post('/register',{
            user: this.user,
            pass: this.pass,
            dob: this.dob,
            email: this.email,
        },{
            responseType: 'json',
        }).subscribe(data => {
            if (data['register']) {
                this.loggedIn.emit(true)
            } else {
                let err = data['error']
                switch(err) {
                    case 'email':
                        this.emailExists = true;
                        break;
                    case 'user':
                        this.userExists = true;
                        break;
                    default:
                        this.smErr = true;
                }
                    console.log(data['error'])
            }
        })
    } else {
        this.register = true;
    }
    };
}

