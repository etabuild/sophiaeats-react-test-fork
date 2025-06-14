import styles from "./Payment.module.css"
import paypayLogo from "./../../assets/paypay_1_rgb.png"
export const Payment = ({paypayFunction}:{paypayFunction:()=>void}) => {
    return (
        <>
            <div className={styles.totalPriceSection}>
                <p className={styles.totalPriceLabel}>合計</p>
                <p className={styles.totalPriceNumber}>¥{

                }</p>
            </div>
            <div className={styles.paymentSection}>
                <p>支払い方法を選択</p>
                <button onClick={paypayFunction}>
                    <img src={paypayLogo} alt="paypay" />
                    <i className={"material-symbols-rounded"}>outbound</i>

                </button>
                <button>クレジットカード
                    <i className={"material-symbols-rounded"}>outbound</i>
                </button>
            </div>

        </>
    )
}