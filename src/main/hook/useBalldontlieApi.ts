import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { endpoint } from "../constant/endpont";
import { setNbaPlayer } from "../redux/slicer/nba-player.slicer";
import { INbaResponse } from "../interface/INbaRespons";
import ky from "ky";


export const useBalldontlieApi = () => {
    const dispatch = useDispatch();

    const getPlayer = async () => {
        const respons: INbaResponse = (await ky(
            'players',
            {
                prefixUrl: 'https://www.balldontlie.io/api/v1/',
                timeout: 10000,
            })
            .then(res => res.json())
        )
        dispatch(setNbaPlayer(respons.data))
    }

    return {
        getPlayer
    }
}