import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, Store } from '../../../../store';
import { tap } from 'rxjs/operators';
@Injectable()
export class AuthService {
    constructor(
        private angularFireAuth: AngularFireAuth,
        private store: Store
    ) {

    }

    auth$ = this.angularFireAuth.authState
        .pipe(tap(next => {
            if(next) {
                this.store.set('user', {
                    email: next.email,
                    uid: next.uid,
                    authenticated: true
                })}
            else this.store.set('user', null)
        }));

    createUser(email: string, password: string) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }
    
    logoutUser(){
        return this.angularFireAuth.auth.signOut();
    }
}