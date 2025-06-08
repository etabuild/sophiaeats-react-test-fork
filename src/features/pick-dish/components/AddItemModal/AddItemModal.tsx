import {useModal} from "../../../../comps/ui/modal/Modal.tsx";
import {useNavigate} from "react-router-dom";
import styles from "./AddItemModal.module.css";
export const AddItemModal=()=>{
    const {closeModal} = useModal()
    const navigate = useNavigate()
    return(
        <>
            <p className={styles.modalTitle}>
                商品をカートに追加しました </p>
            <div className={styles.cardContainer}>
            <div className={styles.cardTextContainer}>
                <p className={styles.menuName}>メニュー</p>
                <p className={styles.menuPrice}>¥450</p></div></div>
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