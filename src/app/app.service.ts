import { Injectable } from '@angular/core';

import { Comment } from './comment';

@Injectable()
export class AppService {
    public comments: Comment[] = [];
}
