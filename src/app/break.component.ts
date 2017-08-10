import { Component } from '@angular/core';
import { Comment } from './comment'

@Component({
    selector: 'break',
    templateUrl: 'break.component.html'
})

export class BreakComponent {
    from:Date;
    to:Date;
    comment:string;

    comments:Comment[] =[];

    add() {
        this.comments.push({
            from: this.from,
            to: this.to,
            comment: this.comment,
        });
        this.clear();
    }
    clear() {
        this.from=undefined;
        this.to=undefined;
        this.comment="";
    }

}
