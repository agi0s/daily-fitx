import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Store } from '../store';
import { Routes, RouterModule} from '@angular/router';

// feature modules
import { AuthModule } from '../auth/auth.module';

//containers
import { AppComponent } from './containers/app/app.component';

//components

//routes
export const ROUTES: Routes = [
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
