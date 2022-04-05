import { shirket } from "src/models/_muhasibat";
export interface ShirketsState {
    shirkets: shirket[] | null;
    isLoading: boolean;
    error: any;
}

export const shirketsInitialState: ShirketsState = {
    shirkets: [],
    isLoading: true,
    error: null
};
