import { Action } from "@ngrx/store";
import { shirket } from "src/models/_muhasibat";

export enum ShirketActionTypes {
  SHIRTKETS_QUERY = '[Shirkets] Shirkets query',
  SHIRTKETS_LOADED = '[Shirkets] Shirkets loaded',
  SHIRTKET_ADDED = '[Shirket] Shirket added',
  SHIRTKET_EDITED = '[Shirkets] Shirket edited',
  SHIRTKET_DELETED = '[Shirkets] Shirket deleted',
  SHIRTKETS_ERROR = '[Shirkets] Shirkets error'
}

export class ShirketsQuery implements Action {
  readonly type = ShirketActionTypes.SHIRTKETS_QUERY;
}

export class ShirketsLoaded implements Action {
  readonly type = ShirketActionTypes.SHIRTKETS_LOADED;

  constructor(public payload: { shirkets: shirket[] }) { }
}

export class ShirketAdded implements Action {
  readonly type = ShirketActionTypes.SHIRTKET_ADDED;

  constructor(public payload: { shirket: shirket }) { }
}

export class ShirketEdited implements Action {
  readonly type = ShirketActionTypes.SHIRTKET_EDITED;

  constructor(public payload: { shirket: shirket }) { }
}

export class ShirketDeleted implements Action {
  readonly type = ShirketActionTypes.SHIRTKET_DELETED;

  constructor(public payload: { shirket: shirket }) { }
}

export class ShirketsError implements Action {
  readonly type = ShirketActionTypes.SHIRTKETS_ERROR;

  constructor(public payload: { error: any }) { }
}

export type ShirketsActions =
  | ShirketsQuery
  | ShirketsLoaded
  | ShirketAdded
  | ShirketEdited
  | ShirketDeleted
  | ShirketsError ;
/*
export const requestLoadShirkets = createAction(
 '[Shirket/API] Request Load Shirkets'
);

export const loadShirkets = createAction(
 '[Shirket/API] Load Shirkets',
 props<{ shirkets: shirket[] }>()
);

export const addShirket = createAction(
 '[Shirket/API] Add Shirket',
 props<{ _shirket: shirket }>()
);

export const updateShirket = createAction(
 '[Shirket/API] Update Shirket',
 props<{ _shirket: Update<shirket> }>()
);

export const deleteShirket = createAction(
 '[Shirket/API] Delete Shirket',
 props<{ id: string }>()
);

export const searchShirket = createAction(
 '[Shirket/API] Search Shirkets',
 props<{ searchQuery: string }>()
);*/

