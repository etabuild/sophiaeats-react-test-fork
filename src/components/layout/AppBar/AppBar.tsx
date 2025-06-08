import logo from "../../../assets/logo/logo-with-text.svg";
import styles from "./AppBar.module.css"
interface AppBarProps {
    cartButtonClicked: () => void
}

export const AppBar = ({cartButtonClicked}: AppBarProps) => {
    return (
        <>
            <div className={styles.appBar}>
                <img className={styles.appBarLogo} src={logo}/>
                <div className="appBarBtnContainer">
                    <button className={styles.appBarBtn}>
                    <span className="material-symbols-rounded">
                        language
                    </span>
                    </button>
                    <button className={styles.appBarBtn} onClick={
                        cartButtonClicked
                    }>
                        <p className={styles.cartItemCountIndicator}>9</p>
                        <span className="material-symbols-rounded">

                        shopping_cart
                    </span>
                    </button>

                </div>

            </div>
        </>
    )
}