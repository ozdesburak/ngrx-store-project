import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from '../actions/auth.actions';
import * as fromContactActions from '../actions/contact.actions';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AlertEffects {

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
        this.snackBar.open('Login Success, Welcome ' +action.user.email, 'OK', { duration: 2500 })
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginFailure),
        tap(() => this.snackBar.open('Login Failure', 'OK', { duration: 2500 }))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.snackBar.open('Good Bye', 'OK', { duration: 2500 }))
      ),
    { dispatch: false }
  );
  comeBackSoon$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() =>
          setTimeout(() => {
            this.snackBar.open('Come Back Soon', 'OK', { duration: 2500 , panelClass: ['blue-snackbar'] });
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  Success$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromContactActions.contactSuccess),
        tap(() => this.snackBar.open('Success', 'OK', { duration: 2500 ,  panelClass: ['green-snackbar']}))
      ),
    { dispatch: false }
  );
  Fail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromContactActions.contactFailure),
        tap(() => this.snackBar.open('Fail', 'OK', { duration: 2500,  panelClass: ['red-snackbar'] }))
      ),
    { dispatch: false }
  );

 


 

 
  

 
 
  

  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}
}