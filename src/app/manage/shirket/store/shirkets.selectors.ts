import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShirketsState } from './shirkets.state';


export const getShirketsState = createFeatureSelector<ShirketsState>('shirket');

export const getShirkets = createSelector(
    getShirketsState,
    shirkets => shirkets.shirkets
);

export const getAllLoaded = createSelector(
    getShirketsState,
    shirkets => shirkets.isLoading
);

export const getError = createSelector(
    getShirketsState,
    shirkets => shirkets.error
);
// const shirketsSelector = createFeatureSelector<fromStore.ShirketState>(fromStore.shirketsFeatureKey);

// export const isLoading = createSelector(shirketsSelector, fromStore.selectIsLoading);
// export const shirkets = createSelector(shirketsSelector, fromStore.selectAll);
// export const error = createSelector(shirketsSelector, fromStore.selectError);