import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login',
    templateUrl: 'login.html',
})

export class Login {
    user: string;
    pass: string;

    constructor(private http: HttpClient) {
    }

    submit() {
        //Send user pass data
    };
}

