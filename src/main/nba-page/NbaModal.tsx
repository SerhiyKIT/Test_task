import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { ConfigProvider, Modal } from "antd";
import { useTableMetod } from "../hook/useTableMetod";

import "./styles/nba-modal.css"

export const NbaModal = () => {
    const { modalNba } = useSelector((store: RootState) => store.nbaPlayer);
    const { createDataSource, openModalNba } = useTableMetod();
    const data = createDataSource().find((element) => element.id === modalNba.id)
    const winWodth = window.screen.width
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'rgba(255, 255, 255, 0.99)',
                    zIndexPopupBase: 1
                },
                components: {
                    Modal: {
                        contentBg: "#1C1B1B",
                    },
                },
            }}
        >
            <div className="modal_position">
                <Modal
                    key={'modal'}
                    maskClosable={true}
                    open={modalNba.modalIsOpen}
                    footer={false}
                    mask={false}
                    style={{
                        top: winWodth >= 1920 ? 540 : 640,
                        left: winWodth >= 1920 ? 1200 : 430,
                        margin: 0,
                    }}
                    destroyOnClose={true}
                    onCancel={() => openModalNba(false, '')}
                    closable={true}>
                    <div className="nba_modal">
                        <div className="nba_modal-preview">
                            <span className="preview_titel">MVP PLAYER</span>
                            <span className="preview_name">{data?.name}</span>
                        </div>
                        <div className="nba_modal-optional">
                            <div>
                                <span className="optional_titel">TEAM</span>
                                <span className="optional_velue">{data?.team}</span>
                                <div className="optional_line"></div>
                            </div>
                            <div>
                                <span className="optional_titel">GP</span>
                                <span className="optional_velue">{data?.gp}</span>
                                <div className="optional_line"></div>
                            </div>
                            <div>
                                <span className="optional_titel">MIN</span>
                                <span className="optional_velue">{data?.min}</span>
                                <div className="optional_line"></div>
                            </div>
                            <div>
                                <span className="optional_titel">PTS</span>
                                <span className="optional_velue">{data?.pts}</span>
                                <div className="optional_line"></div>
                            </div>
                            <div>
                                <span className="optional_titel">FG%</span>
                                <span className="optional_velue">{data?.fg}</span>
                                <div className="optional_line"></div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </ConfigProvider>
    )
}