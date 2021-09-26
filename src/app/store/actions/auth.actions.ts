import { HttpErrorResponse } from '@angular/common/http';
import { Type } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { User, UserId} from '../../models/auth';

export enum type {
  LOGIN_COMPONENET   = '[Login Component] Login User',
  LOGIN_SUCCESS      = '[Auth Effect] Login User Success',
  LOGIN_FAIL         = '[Auth Effect] Login User Failure',
  LOGIN_OUT          = '[Auth Links Component] Logout User',
  RELOAD             = '[App Component] Browser Reload',

  REGİSTER_COMPONENT = '[Register Component] Register User',
  REGİSTER_SUCCESS = '[Register] Register Success',
  REGİSTER_FAIL = '[Register] Register Failure',
}
export interface IlgError {
  message: string;
  responseError: HttpErrorResponse;
}


  //* Login Create Action 
export const loginPage = createAction(type.LOGIN_COMPONENET,props<{ username: string; password: string }>());

export const loginSuccess = createAction(type.LOGIN_SUCCESS, props<{ user: User }>());

export const loginFailure = createAction(type.LOGIN_FAIL, props<{ error: any | null }>());

export const logout = createAction(type.LOGIN_OUT);

//? Register Create Action


  //* Reload 
export const browserReload = createAction(type.RELOAD, props<{ user: User }>());

