import styles from "./Payment.module.css"

export const Payment = () => {
    return (
        <>
            <div className={styles.totalPriceSection}>
                <p className={styles.totalPriceLabel}>合計</p>
                <p className={styles.totalPriceNumber}>¥{

                }</p>
            </div>
        </>
    )
}