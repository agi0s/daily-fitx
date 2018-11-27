import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { User } from 'firebase';

export interface State {
    user: User,
    [key: string]: any
}

export interface User {
    email: string,
    uid: string,
    authenticated: boolean
}

const state: State = {
    user: undefined
};

export class Store {
    private subject: BehaviorSubject < State > = new BehaviorSubject(state)
    private store = this.subject.asObservable()
        .pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string):Observable<T> {
        return this.store.pipe(pluck(name))
    }

    set (name: string, state: any){
        this.subject.next({...this.value, [name]: state})
    }
}