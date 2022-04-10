import { shirket } from "src/models/_muhasibat";
import { ShirketActionTypes, ShirketsActions } from "./shirkets.actions";



export interface ShirketsState {
    shirkets: shirket[] | null;
    isLoading: boolean;
    error: any;
}

export const shirketsInitialState: ShirketsState = {
    shirkets: null,
    isLoading: true,
    error: null
};

export function shirketsReducer(state = shirketsInitialState, action: ShirketsActions): ShirketsState {
    switch (action.type) {

        case ShirketActionTypes.SHITKET_QUERY: {
            return Object.assign({}, state, {
                isLoading: false,
            });
        }

        case ShirketActionTypes.SHITKET_LOADED: {
            return Object.assign({}, state, {
                shirkdata: action.payload.shirkdata,
                isLoading: false,
            });
        }

        case ShirketActionTypes.SHITKET_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.error
            });
        }

        default:
            return state;


       
    
    }
}

/*


    export const shirketsFeatureKey = 'shirkets';

export interface ShirketState extends EntityState<shirket> {
    isLoading: boolean;
    error: string | null;
}

export const adapter: EntityAdapter<shirket> = createEntityAdapter<shirket>();

export const initialState: ShirketState = adapter.getInitialState({
    isLoading: true,
    error: null
});

export const reducer = createReducer(
    initialState,
    on(ShirketActions.addShirket,
        (state, action) => adapter.addOne(action._shirket, state)
    ),
    on(ShirketActions.updateShirket,
        (state, action) => adapter.updateOne(action._shirket, state)
    ),
    on(ShirketActions.deleteShirket,
        (state, action) => adapter.removeOne(action.id, state)
    ),
    on(ShirketActions.loadShirkets,
        (state, action) => adapter.setAll(action.shirkets, {
            ...state,
            isLoading: false
        })
    ),
    on(ShirketActions.requestLoadShirkets,
        (state, _) => adapter.setAll([], {
            ...state,
            isLoading: true
        })
    )
);

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectIsLoading = (state: ShirketState) => state.isLoading;
export const selectError = (state: ShirketState) => state.error;
}*/