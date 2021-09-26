import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouteEffects {
  goHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess,fromAuthActions.logout),
        tap(() => this.route.navigate(['/']))
      ),
    { dispatch: false }
  );

 


  constructor(private actions$: Actions, private route: Router) {}
}