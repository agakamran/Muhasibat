import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AdminState } from '../admin/store/admin.state';
import { AuthState } from '../auth/store/auth.state';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromAdmin from '../admin/store/admin.reducer';
// import { ShirketsState } from '../manage/shirket/store/shirkets.state';
// import * as fromShirket from '../manage/shirket/store/shirkets.reducer';
// import { MenusState } from '../views/store/menus.state';
// import *as fromMenu from '../views/store/menus.reducer'

export interface AppState {
  auth: AuthState;
  admin: AdminState;
 // menus: MenusState;
 // shirket:ShirketsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  admin: fromAdmin.adminReducer,
 // menus: fromMenu.menusReducer,
 // shirket: fromShirket.shirketsReducer
};
export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState | undefined, action: Action): AppState {
    if (action.type === '[Auth] LOGOUT completed') {
      state = undefined;
    }
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<AppState>[] = [clearState];
//export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];