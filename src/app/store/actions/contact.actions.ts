import { createAction, props } from '@ngrx/store';
import { Contact, contactId } from 'src/app/models/contactModel';


export enum type {
  CONTACT_COMPONENT = '[Contact Component] Craete Contact Form',
  CONTACT_SUCCESS = '[Contact] Contact Success',
  CONTACT_FAIL = '[Contact] Contact Failure',
}



//? Contact Create Action
export const contactCreatePage = createAction(type.CONTACT_COMPONENT,props<{ contact: Omit<Contact, contactId> }>());

export const contactSuccess = createAction(type.CONTACT_SUCCESS, props<{ contact: Contact }>());

export const contactFailure = createAction(type.CONTACT_FAIL, props<{ error: any  }>());




