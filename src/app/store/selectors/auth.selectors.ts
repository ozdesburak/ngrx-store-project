import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/models/auth';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export interface AuthLinksViewModal {
  isAdmin: boolean;
  isLoggedin: boolean;
}

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user._id != null
);
export const selectUser = createSelector(
  selectAuthState,
  (state: fromAuth.State): User => state.user 
);

export const selectIsAdmin = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user.isadmin
);

export const selectAuthLinksViewModel = createSelector(
  selectIsAdmin,
  selectIsLoggedIn,
  (isAdmin: boolean, isLoggedIn: boolean): AuthLinksViewModal => {
    return {
      isAdmin: isAdmin,
      isLoggedin: isLoggedIn,
    };
  }
);