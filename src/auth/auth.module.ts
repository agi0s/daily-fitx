import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
];

export const FirebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyD0KUeNvHS1CKMDfwABugNJE9Ye-MSlTKg",
    authDomain: "daily-fitx.firebaseapp.com",
    databaseURL: "https://daily-fitx.firebaseio.com",
    projectId: "daily-fitx",
    storageBucket: "daily-fitx.appspot.com",
    messagingSenderId: "293061193106"
  };

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})

export class AuthModule {

}