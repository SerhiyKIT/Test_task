import { useSelector } from "react-redux";
import { useTableMetod } from "../hook/useTableMetod";
import { RootState } from "../redux/store";

import "./styles/player-select.css"

export const PlayerSelect = () => {
    const { modalNba } = useSelector((store: RootState) => store.nbaPlayer);
    const { createDataSource, openModalNba } = useTableMetod();
    return (
        <div key={"player_select"} className="player_select">
            <span className="player_select-name" >PICK ONE OF THE PLAYER</span>
            <div className="box_item">
                {
                    createDataSource().map((item) => {
                        return (
                            <div className={`box_item-item ${modalNba.id === item.id ? 'active' : ''}`}  key={item.id} onClick={() => openModalNba(true, item.id)}>
                                <span className="box_item-item_name">{item.name}</span>
                                <span className="box_item-item_team">{item.team}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}