import { Component } from '@angular/core';
import { Comment } from './comment'
import { AppService } from './app.service';

@Component({
    selector: 'break',
    templateUrl: 'break.component.html'
})

export class BreakComponent {
    from:Date;
    to:Date;
    comment:string;

    constructor(private appserv:AppService) {
    }

    add() {
        let com:Comment = {
            from: this.from,
            to: this.to,
            comment: this.comment,
        };
        this.appserv.comments.push(com);
        this.clear();
    }
    clear() {
        this.from=undefined;
        this.to=undefined;
        this.comment="";
    }

}
