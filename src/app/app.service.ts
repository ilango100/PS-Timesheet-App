import { Injectable } from '@angular/core';

import { Comment } from './comment';

@Injectable()
export class AppService {
    comments: Comment[] = [];

    getComments():Comment[] {
        return this.comments;
    }

    addComment(com:Comment) {
        this.comments.push(com);
    }

}
