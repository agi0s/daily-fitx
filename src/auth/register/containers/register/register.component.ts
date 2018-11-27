import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
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
            <div class="error" *ngIf="error">
            {{ error }}
            </div>
            <div class="success" *ngIf="success">
            {{ success }}
            </div>
        </auth-form>
        </div>
    `
})

export class RegisterComponent {
    constructor(public authService: AuthService,
                private router: Router) {}
    error: string;
    success: string;

    registerUser(event: FormGroup) {
        let { email, password } = event.value;
        this.authService.createUser(email, password)
            .then( _ => this.router.navigate(['/']))
            .catch( err => this.error = err.message );
    }
}