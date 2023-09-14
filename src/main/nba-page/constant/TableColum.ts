import { ColumnsType } from "antd/es/table";
import { useTableMetod } from "../../hook/useTableMetod";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface DataType {
  id: string;
  name: string;
  team: string;
  gp: string | number;
  min: string | number;
  pts: number;
  fg: string;
}

export const TableColumns = () => {
  const { createDataSource } = useTableMetod();
  const { dataNba } = useSelector((store: RootState) => store.nbaPlayer);

  const createFiler = (type: 'name' | 'team') => {
    let newArr: {
      text: string;
      value: string;
    }[] = []
    switch (type) {
      case "name":
        dataNba.forEach((item) => {
          if (newArr.find((newItem) => newItem.value === item.last_name) === undefined) {
            newArr = [...newArr, { text: item.last_name, value: item.last_name }]
          }
        })
        break;
      case "team":
        createDataSource().forEach((item) => {
          if (newArr.find((newItem) => newItem.value === item.team) === undefined) {
            newArr = [...newArr, { text: item.team, value: item.team }]
          }
        })
        break;
    }
    return newArr;
  }

  const strToNum = (value: string | number) => {
    return Number(value) || 0
  }

  const tableColumns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Team',
      dataIndex: 'team',
      key: 'team',
      filters: createFiler("team"),
      onFilter: (value: string | number | boolean, record) => record.team.indexOf(String(value)) === 0,
    },
    {
      title: 'GP',
      dataIndex: 'gp',
      key: 'gp',
      sorter: (a, b) => strToNum(a.gp) - strToNum(b.gp),
    },
    {
      title: 'MIN',
      dataIndex: 'min',
      key: 'min',
      sorter: (a, b) => strToNum(a.min) - strToNum(b.min),
    },
    {
      title: 'PTS',
      dataIndex: 'pts',
      key: 'pts',
      sorter: (a, b) => a.pts - b.pts,
    },
    {
      title: 'FG',
      dataIndex: 'fg',
      key: 'fg',
      sorter: (a, b) => strToNum(a.fg.replace('%', '')) - strToNum(b.fg.replace('%', '')),
    },
  ];

  return tableColumns;
}
