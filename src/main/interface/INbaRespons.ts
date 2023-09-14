import { IMeta } from "./IMeta";
import { INbaPlayer } from "./INbaPlayer";

export interface INbaResponse {
    data: INbaPlayer[],
    meta: IMeta
}