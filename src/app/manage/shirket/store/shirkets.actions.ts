import { Action } from "@ngrx/store";
import { shirket } from "src/models/_muhasibat";

export enum ShirketActionTypes {
  SHITKETS_QUERY =  '[Shirket] Query',    //qaytar
  SHITKETS_LOADED = '[Shirket] Fetched', //yuklendi
  SHITKETS_ADDED =  '[Shirket] Added',    //elave et
  SHITKETS_EDITED = '[Shirket] Edited',  //yenile
  SHITKETS_DELETED ='[Shirket] Deleted', //sil
  SHITKETS_ERROR =  '[Shirket] Error'      
}

export class ShirketsQuery implements Action {
  readonly type = ShirketActionTypes.SHITKETS_QUERY;
}

export class ShirketsLoaded implements Action {
  readonly type = ShirketActionTypes.SHITKETS_LOADED;
  constructor(public payload: { shirkets: shirket[] }) { }
}

export class ShirketsAdded implements Action {
  readonly type = ShirketActionTypes.SHITKETS_ADDED;

  constructor(public payload: { shirkets: shirket }) { }
}

export class ShirketsEdited implements Action {
  readonly type = ShirketActionTypes.SHITKETS_EDITED;

  constructor(public payload: { shirkets: shirket }) { }
}

export class ShirketsDeleted implements Action {
  readonly type = ShirketActionTypes.SHITKETS_DELETED;

  constructor(public payload: { shirkets: shirket }) { }
}

export class ShirketsError implements Action {
  readonly type = ShirketActionTypes.SHITKETS_ERROR;

  constructor(public payload: { error: any }) { }
}

export type ShirketsActions =
  | ShirketsQuery
  | ShirketsLoaded
  | ShirketsAdded
  | ShirketsEdited
  | ShirketsDeleted
  | ShirketsError;

