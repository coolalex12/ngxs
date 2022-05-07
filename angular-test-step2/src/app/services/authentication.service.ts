import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoginInfo } from '../state-models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private users = [
    {
      username: 'john',
      password: '5532',
    },
    {
      username: 'tammy',
      password: '3451',
    },
  ];

  constructor() {
    console.log('users', this.users);
  }

  signIn(payload: LoginInfo): Observable<boolean> {
    return this.authenticate(payload.username, payload.password);
  }

  signout(): Observable<null> {
    return of(null);
  }

  authenticate(username: string, password: string) {
    username = username.toLowerCase();
    const user = this.users.find((u) => u.username === username); // fixed :)
    if (user && user.password === password) {
      return of(true).pipe(delay(500));
    }
    return throwError('Invalid username or password').pipe(delay(500));
  }
}
