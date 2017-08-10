import { Injectable } from '@angular/core';

import { Comment } from './comment';

@Injectable()
export class AppService {
    public comments: Comment[] = [];

    public loginTime:Date;
    public logoutTime:Date;

    calcTime():number {
        let fullTime = this.logoutTime.getTime()-this.loginTime.getTime();
        let hrs = fullTime/(1000)
        return hrs;
    }

}
