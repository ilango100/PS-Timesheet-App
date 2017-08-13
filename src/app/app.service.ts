import { Injectable } from '@angular/core';

import { Comment } from './comment';

@Injectable()
export class AppService {
    public comments: Comment[] = [];

    public loginTime:Date;
    public logoutTime:Date;

    calcTime():number {
        let fullTime = this.logoutTime.getTime()-this.loginTime.getTime();
        let len = this.comments.length
        let breaktime = 0
        for (let i=0;i<len; i++) {
            let br = this.comments[i].to.getTime() - this.comments[i].from.getTime()
            if (br > 0)
                breaktime += br
        }
        let msecs = fullTime - breaktime
        let hrs = msecs/(1000*60*60)
        if (hrs < 0)
            hrs = 0
        return hrs;
    }

}
