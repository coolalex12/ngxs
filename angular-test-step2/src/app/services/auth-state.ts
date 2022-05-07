import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { AuthStateModel, Login, LoginFailure, Logout } from '../state-models';
import { AuthenticationService } from './authentication.service';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    username: '',
    loggedIn: false,
  },
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthenticationService) {}

  @Selector()
  static loggedIn(state: AuthStateModel) {
    return state.loggedIn;
  }

  @Selector()
  static username(state: AuthStateModel) {
    return state.username;
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.signIn(action.payload).pipe(
      tap((res) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          loggedIn: true,
          username: action.payload.username,
        });
      }),
      catchError((err) => ctx.dispatch(new LoginFailure(err)))
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.authService.signout().pipe(
      tap(() => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          loggedIn: false,
          username: '',
        });
      })
    );
  }
}
