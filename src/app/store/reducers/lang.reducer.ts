import { Action, createReducer, on } from '@ngrx/store';
import * as LangActions from '../actions/lang.actions';
import { User } from '../../models/auth';

export const langFeatureKey = 'lang';

export interface State {
  lang: string;
  error: any;
}

export const initialState: State = {
  lang: null,
  error: null,
};

export const reducer = createReducer(
  initialState,


  on(LangActions.LangSuccess, (state, action) => {    
    return {  
      ...state,
      lang: action.lang_key,
      error: null,
    };
  }),  

);