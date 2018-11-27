import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, User } from '../../../store';
import { AuthService } from '../../../auth/shared/services/auth/auth.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'final';
  user$: Observable <User>;
  subscription: Subscription;
  constructor(private store: Store,
              private AuthService: AuthService,
              private router: Router
              ){}

  ngOnInit(){
    this.subscription = this.AuthService.auth$
      .subscribe();
    this.user$ = this.store.select('user');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  logout(){
    this.AuthService.logoutUser()
      .then( _ => this.router.navigate['/auth/login']);
  }

}
