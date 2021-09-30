import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLang from '../reducers/lang.reducer';

export const selectLangState = createFeatureSelector<fromLang.State>(
    fromLang.langFeatureKey
);



