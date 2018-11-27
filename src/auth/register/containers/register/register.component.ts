import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    template: `
        <div>
            <auth-form (submitted)="registerUser($event)">
            <h1>Register</h1>
            <a routerLink="/auth/login">Already registered?</a>
            <button type="submit">
                Register
            </button>
        </auth-form>
        </div>
    `
})
export class RegisterComponent {
    constructor() {}

    registerUser(event: FormGroup){
        console.log(event.value);
    }
}