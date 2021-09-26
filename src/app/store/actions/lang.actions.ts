import { createAction, props } from '@ngrx/store';
import { Contact, contactId } from 'src/app/models/contactModel';


export enum type {
  LANG = '[LANG] LANG display',
  LANG_SUCCESS = '[LANG] Lang Success',
  LANG_FAIL = '[Contact] Lang Failure',
}



//* Lang Create Action 
export const LangSuccess = createAction(type.LANG_SUCCESS, props<{ lang_key: string }>());





