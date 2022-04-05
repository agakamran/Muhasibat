import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShirketsState } from "./shirkets.state";

export const getShirketState = createFeatureSelector<ShirketsState>('shirkets');

export const getShirkets = createSelector(
    getShirketState,
    shirkets => shirkets.shirkets
);

export const getIsLoading = createSelector(
    getShirketState,
    shirkets => shirkets.isLoading
);

export const getError = createSelector(
    getShirketState,
    shirkets => shirkets.error
);