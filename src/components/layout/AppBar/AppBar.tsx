import logo from "../../../assets/logo/logo-with-text.svg";
import styles from "./AppBar.module.css"
import { LinearBlur} from "../../../lib/progressive-blur/LinearBlur.tsx"
interface AppBarProps {
    cartButtonClicked: () => void
}

export const AppBar = ({cartButtonClicked}: AppBarProps) => {
    return (
        <>
            <div className={`
                flex
                fixed
                pt-4 pr-3 pb-3 pl-6
              
                w-full
                justify-between
            `

            }>
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
{/*
                <div className={styles.blurObj}></div>
*/}
                {/*        <LinearBlur
                    steps={8}
                    strength={64}
                    falloffPercentage={100}
                    tint="#FEF5EC99"
                    side={"top"}
                    style={{
                        background: 'linear-gradient(0deg, #ffe4ce00 0%, #ffe4ceFF 60%)',
                        background: '#ffe4ce',
                        zIndex: 50,
                        position: "absolute",
                        bottom:' -20px',
                        left: 0,
                        right: 0,
                        height: '20px'
                    }}
                ></LinearBlur> */}
{/*                <LinearBlur
                    steps={8}
                    strength={64}
                    falloffPercentage={100}
                    tint="#FEF5EC99"
                    side={"top"}
                    style={{
                        background: 'linear-gradient(0deg, #ffe4ce00 0%, #ffe4ceFF 60%)',
                        background: '#ffe4ce',
                        zIndex: 50,
                        position: "absolute",
                        bottom:' -20px',
                        left: 0,
                        right: 0,
                        height: '20px'
                    }}
                ></LinearBlur>*/}
  {/*              <div className={styles.blurObj}></div>
                <div className={styles.gradObj}>

                </div>*/}
            </div>

        </>
    )
}