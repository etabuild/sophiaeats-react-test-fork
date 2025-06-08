import {useModal} from "./Modal.tsx";
import {useNavigate} from "react-router-dom";

export const AddItemModal=()=>{
    const {closeModal} = useModal()
    const navigate = useNavigate()
    return(
        <>
            <p style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#EC473D",
                fontWeight: "bold",
            }}>
                商品をカートに追加しました </p>
            <div style={{
                width: '55vw',
                height: '55vw',
                borderRadius: '20px',
                background: 'white',
                position: 'relative',
                margin: 'auto',
                boxShadow: '0 0 10px #99999955',

            }}>
            <div style={{
                width: '100%',
                borderRadius: '0 0 20px 20px',
                position: 'absolute',
                bottom: 0,
                height: '15vw',
                background: '#FEF5EC',
                display: 'grid',

                gridTemplateColumns: '1fr',
                gridTemplateRows: '7vw 8vw',
            }}>
                <p style={{
                    margin: 0,
                    fontSize: '3.5vw',
                    lineHeight: '2.7',
                    paddingLeft: '15px'
                }}>メニュー</p>
                <p style={{
                    margin: 0,
                    lineHeight: '0.9',
                    fontSize: '5.4vw',
                    paddingLeft: '15px',
                    fontWeight: 'bold',
                }}>¥450</p></div></div>
            <div style={{
                position: 'absolute',
                bottom: '10px',
                width: '95%',
                left: '2.5%'
            }}
                 className={"proceedBtnSection"}>
                <button className={"btnBack"} onClick={()=>{
                    closeModal()

                }}>もっと選ぶ</button>
                <button className={"btnProceed"} onClick={()=>{
                    closeModal()
                    navigate('./cart/')
                }}>カートへ進む
                </button>
            </div>
        </>
    )
}