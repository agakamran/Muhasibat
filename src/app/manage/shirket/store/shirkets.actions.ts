
import { Action } from "@ngrx/store";
import { shirket } from "src/models/_muhasibat";



export enum ShirketActionTypes {
  SHITKET_QUERY =  '[Shirket] Query',    //qaytar
  SHITKET_LOADED = '[Shirket] Fetched', //yuklendi
  SHITKET_ADDED =  '[Shirket] Added',    //elave et
  SHITKET_EDITED = '[Shirket] Edited',  //yenile
  SHITKET_DELETED ='[Shirket] Deleted', //sil
  SHITKET_ERROR =  '[Shirket] Error'    
  
}

export class ShirketsQuery implements Action {     

  readonly type = ShirketActionTypes.SHITKET_QUERY;
}

export class ShirketsLoaded implements Action {
  readonly type = ShirketActionTypes.SHITKET_LOADED;
  constructor(public payload: { shirkdata: shirket[] }) { }
}

export class ShirketsAdded implements Action {
  readonly type = ShirketActionTypes.SHITKET_ADDED;

  constructor(public payload: { shirkets: shirket }) { }
}

export class ShirketsEdited implements Action {
  readonly type = ShirketActionTypes.SHITKET_EDITED;

  constructor(public payload: { shirkets: shirket }) { }
}

export class ShirketsDeleted implements Action {
  readonly type = ShirketActionTypes.SHITKET_DELETED;

  constructor(public payload: { shirkets: shirket }) { }
}

export class ShirketsError implements Action {
  readonly type = ShirketActionTypes.SHITKET_ERROR;

  constructor(public payload: { error: any }) { }
}

export type ShirketsActions =
  | ShirketsQuery
  | ShirketsLoaded
  | ShirketsAdded
  | ShirketsEdited
  | ShirketsDeleted
  | ShirketsError;

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

