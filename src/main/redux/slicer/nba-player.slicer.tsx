import { createSlice } from "@reduxjs/toolkit";
import { INbaPlayer } from "../../interface/INbaPlayer";

interface IState {
    dataNba: INbaPlayer[],
    modalNba: IModalNba
}

export interface IModalNba {
    id: string
    modalIsOpen: boolean
}

const initialState: IState = {
    dataNba: [],
    modalNba: {
        id: '',
        modalIsOpen: false,
    }
}

export const NbaPlayerSlice = createSlice({
    initialState,
    name: "nbaPlayer",
    reducers: {
        setNbaPlayer(state, payload: { type: string, payload: INbaPlayer[] }) {
            return { ...state, dataNba: payload.payload }
        },
        setNbaModal(state, payload: { type: string, payload: IModalNba }) {
            return { ...state, modalNba: payload.payload }
        }
    },
});

export const { setNbaPlayer, setNbaModal } = NbaPlayerSlice.actions;