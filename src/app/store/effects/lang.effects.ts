import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromLangActions from '../actions/lang.actions';
import { map, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LangEffects {
  addUserToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromLangActions.LangSuccess),
        tap((action) =>
        localStorage.setItem('lang', action.lang_key )
        )
      ),
    { dispatch: false }
  );


  

  constructor(private actions$: Actions,
    private  translateService: TranslateService
    
    ) {}

}