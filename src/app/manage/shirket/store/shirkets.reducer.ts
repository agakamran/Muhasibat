import { ShirketActionTypes, ShirketsActions } from "./shirkets.actions";
import { shirketsInitialState, ShirketsState } from "./shirkets.state";

export function shirketsReducer(state = shirketsInitialState, action: ShirketsActions): ShirketsState {
    switch (action.type) {

        case ShirketActionTypes.SHITKETS_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case ShirketActionTypes.SHITKETS_LOADED: {
            return Object.assign({}, state, {
                _shirkets: action.payload.shirkets,
                isLoading: false,
            });
        }
        case ShirketActionTypes.SHITKETS_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}