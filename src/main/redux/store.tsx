import { configureStore } from "@reduxjs/toolkit";
import { NbaPlayerSlice } from "./slicer/nba-player.slicer";


export const store = configureStore({
    reducer: {
        nbaPlayer: NbaPlayerSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>