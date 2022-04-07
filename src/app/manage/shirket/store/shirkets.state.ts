import { shirket } from "src/models/_muhasibat";

export interface ShirketsState {
    shirkets: shirket[] | null;
    loading: boolean;
    error: any;
}

export const shirketsInitialState: ShirketsState = {
    shirkets: null,
    loading: false,
    error: null

}