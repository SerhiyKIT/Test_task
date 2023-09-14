import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setNbaModal } from "../redux/slicer/nba-player.slicer";

export const useTableMetod = () => {
  const dispatch = useDispatch();
  const { dataNba, modalNba } = useSelector((store: RootState) => store.nbaPlayer);

  const createDataSource = () => {
    const newData = dataNba.map((item) => {
      return {
        id: `${item.id}`,
        name: `${item.first_name} ${item.last_name}`,
        team: item.team.full_name,
        gp: item.height_feet ? item.height_feet : "-",
        min: item.height_inches ? item.height_inches : "-",
        pts: item.id,
        fg: `${item.team.id}%`,
      }
    })
    return newData
  }

  const openModalNba = (modalStatus: boolean, idPlayer: string) => {
    dispatch(setNbaModal({
      modalIsOpen: modalStatus,
      id: idPlayer,
    }))
  }

  return { createDataSource, openModalNba }
} 