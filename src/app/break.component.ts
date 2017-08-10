import { Component } from '@angular/core';

@Component({
    selector: 'break',
    templateUrl: 'break.component.html'
})

export class BreakComponent {
    from:Date;
    to:Date;
    comments:string[];
    lastComment:string;
}
