import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions, ofActionDispatched, Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import {
  Login,
  AuthStateModel,
  Logout,
  LoginFailure,
} from '../../state-models';
import { AuthState } from '../../services/auth-state';
import { MatSnackBar } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-ngxs',
  templateUrl: './login-ngxs.component.html',
  styleUrls: ['./login-ngxs.component.css'],
})
export class LoginNgxsComponent implements OnInit, OnDestroy {
  username: string;
  password: string;
  @Select(AuthState.username) username$: Observable<string>;
  @Select(AuthState.loggedIn) loggedIn$: Observable<boolean>;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store,
    private snackBar: MatSnackBar,
    private actions$: Actions
  ) {}

  ngOnInit() {
    // Можно по-другому: не ловить экшн, а положить ошибку в стор и читать из него, и показывать например mat-error возле полей ввода
    this.actions$
      .pipe(ofActionDispatched(LoginFailure), takeUntil(this.unsubscribe$))
      .subscribe((err) => {
        this.snackBar.open(err.payload, 'Error', {
          duration: 3 * 1000,
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  doLogin() {
    this.store.dispatch(
      new Login({ username: this.username, password: this.password })
    );
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
