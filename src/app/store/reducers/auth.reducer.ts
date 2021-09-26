import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from '../../models/auth';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    _id: null,
    name: null,
    email: null,
    isadmin: null,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginPage, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),

  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        _id: null,
        username: null,
        email: null,
        isadmin: null,
      },
      error: action.error,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      user: {
        _id: null,
        username: null,
        email: null,
        isadmin: null,
      },
      error: null,
    };
  })
);