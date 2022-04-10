import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShirketsState } from './shirkets.reducer';

export const getShirketsState = createFeatureSelector<ShirketsState>('shirket');
export const getShirkets = createSelector(
    getShirketsState,
    _shirk => _shirk.shirkets
);

export const getIsLoading = createSelector(
    getShirketsState,
    _shirk => _shirk.isLoading
);

export const getError = createSelector(
    getShirketsState,
    _shirk => _shirk.error
);
// const shirketsSelector = createFeatureSelector<fromStore.ShirketState>(fromStore.shirketsFeatureKey);

// export const isLoading = createSelector(shirketsSelector, fromStore.selectIsLoading);
// export const shirkets = createSelector(shirketsSelector, fromStore.selectAll);
// export const error = createSelector(shirketsSelector, fromStore.selectError);