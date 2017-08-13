import { Component } from '@angular/core';
import { Comment } from './comment'
import { AppService } from './app.service';

@Component({
    selector: 'break',
    templateUrl: 'break.component.html'
})

export class BreakComponent {
    from:string;
    to:string;
    comment:string;

    constructor(public appserv:AppService) {
    }

    add() {
        if (this.from == "" || this.to == "" || this.from == undefined || this.to == undefined)
            return;
        console.log(this.from+" "+this.to+" parsing")
        let f = new Date(new Date().toDateString()+" "+this.from)
        let t = new Date(new Date().toDateString()+" "+this.to)
        console.log(f+" "+t+" "+this.comment)
        if (t.getTime() <= f.getTime())
            return;
        let com:Comment = {
            from: f,
            to: t,
            comment: this.comment,
        };
        this.appserv.comments.push(com);
        this.clear();
    }
    clear() {
        this.from=""
        this.to=""
        this.comment="";
    }

}
