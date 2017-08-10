import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
})

export class Login {
    user: string;
    pass: string;
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
        }, err => {
            console.log(err);
        })
    };

    register() {
    //Register method
    };
}

