import { useTableMetod } from "../hook/useTableMetod";
import { NbaModal } from "./NbaModal";
import { TableColumns } from "./constant/TableColum";
import { ConfigProvider, Table } from "antd";

import "./styles/player-table.css"

export const PlayerTable = () => {
    const { createDataSource } = useTableMetod();
    return (
        <div className="player_table">
            <span className="player_table-titel">NBA</span>
            <span className="player_table-titel"> players board</span>
            <div className="player_table-block">
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'Roboto',
                            fontSize: 12,
                        },
                        components: {
                            Table: {
                                headerBg: '#FFFFFF',
                                headerColor: "rgba(28, 27, 27, 0.36)",
                            },
                        },
                    }}
                >
                    <Table
                        key={"table"}
                        rowKey={(item) => item.id}
                        dataSource={createDataSource()}
                        columns={TableColumns()}
                        scroll={{ y: 616 }}
                        pagination={false}
                    />
                </ConfigProvider>
                <NbaModal />
            </div>
        </div>
    )
}