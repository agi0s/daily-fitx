import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    template: `
        <div>
            <auth-form (submitted)="loginUser($event)"> 
                <h1>Login</h1>
                <a routerLink="/auth/register">Not registered?</a>
                <button type="submit">
                    Login
                </button>
                <div class="error" *ngIf="error">
                {{ error }}
                </div>
            </auth-form>
        </div>
    `
})
export class LoginComponent {
    constructor(public authService: AuthService,
                private router: Router) {}

    error: string;

    loginUser(event: FormGroup) {
        let { email, password } = event.value;
        this.authService.loginUser(email, password)
            .then( _ => this.router.navigate(['/']))
            .catch( err => this.error = err.message );
    }

}