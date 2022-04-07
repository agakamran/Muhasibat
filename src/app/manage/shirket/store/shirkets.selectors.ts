import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShirketsState } from "./shirkets.state";

export const getShirketState = createFeatureSelector<ShirketsState>('shirket');

export const getShirkets = createSelector(
    getShirketState,
    shirkets => shirkets.shirkets
);

export const getAllshirketLoaded = createSelector(
   
    getShirketState,
    shirkets => shirkets.loading
);

export const getshirketError = createSelector(
    getShirketState,
    shirkets => shirkets.error
);
