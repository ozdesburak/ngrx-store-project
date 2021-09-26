import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ContactActions from '../actions/contact.actions';
import { ContactService } from '../../services/contact.service';

@Injectable()
export class ContactEffects {

  createContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.contactCreatePage),
      switchMap((action) =>
      this.contactService.create(action).pipe(
          map((contact) => ContactActions.contactSuccess({ contact })),
          catchError((error) => of(ContactActions.contactFailure({ error: error.message  })))
        )
      )
    )
  );
 




  constructor(private actions$: Actions, private contactService: ContactService) {}
}