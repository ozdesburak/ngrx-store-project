import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as fromAuth from './reducers/auth.reducer';
  import * as fromContact from './reducers/contact.reducer';
  import * as fromLang from './reducers/lang.reducer';
  import * as fromRouter from '@ngrx/router-store';
  
  //* State 
  export interface AppState {
    [fromAuth.authFeatureKey]: fromAuth.State;
    [fromContact.contactFeatureKey]: fromContact.State;
    [fromLang.langFeatureKey]: fromLang.State;
    router: fromRouter.RouterReducerState;
  
  }
  //* Reducer 
  export const reducers: ActionReducerMap<AppState> = {
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    [fromLang.langFeatureKey]: fromLang.reducer,
    [fromContact.contactFeatureKey]: fromContact.reducer,
    router: fromRouter.routerReducer,
  
  };
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [debug]
    : [];
  
  //* Debug
  export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
      return reducer(state, action);
    };
  }