import { Action, createReducer, on } from '@ngrx/store';
import * as ContactActions from '../actions/contact.actions';
import { User } from '../../models/auth';
import { Contact } from 'src/app/models/contactModel';

export const contactFeatureKey = 'contact';

export interface State {
  contact: Contact;
  error: any;
}


export const initialState: State = {
  contact: {
    _id: null,
    title:null,
    name: null,
    email: null,
    country_id:null,
    subject: null,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(ContactActions.contactCreatePage, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ContactActions.contactSuccess, (state, action) => {
    return {
      ...state,
      contact: action.contact,
      error: null,
    };
  }),

  on(ContactActions.contactFailure, (state, action) => {
    
    return {
      ...state,
      contact: {
        _id: null,
        title:null,
        name: null,
        email: null,
        country_id:null,
        subject: null,
      },
      error: action.error,
    };
  }),

 
);