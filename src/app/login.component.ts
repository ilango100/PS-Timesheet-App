import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
})

export class Login {
    user: string;
    pass: string;

    constructor(private http: HttpClient) {
    }

    submit() {
        //Send user pass data
        this.http.post('/login',{
            user: this.user,
            pass: this.pass,
        },{
            responseType: 'text',
        }).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        })
    };

    register() {
    //Register method
    };
}

