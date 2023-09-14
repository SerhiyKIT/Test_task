import { useEffect } from "react"
import { useBalldontlieApi } from "../hook/useBalldontlieApi"
import { PlayerSelect } from "./PlayerSelect"
import { PlayerTable } from "./PlayerTable"

import "./styles/nba-page.css"

export const NbaPage = () => {
    const { getPlayer } = useBalldontlieApi();
    useEffect(() => {
        getPlayer()
    }, [])
    return (
        <div className="nba_page" >
            <PlayerSelect />
            <PlayerTable />
        </div>
    )
}