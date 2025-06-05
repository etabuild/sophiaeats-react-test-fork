import './cart.css'
import {useNavigate} from "react-router-dom";

export const Cart = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={"cartRoot"}>
                <div className={"cartHeader"}>
                    <p><i className={"material-symbols-rounded"}>shopping_cart</i><span>カート</span></p>
                    <div className={"cartHeaderCloseBtnWrapper"}>
                        <button className={"cartHeaderCloseBtn"}>
                            <i className={"material-symbols-rounded"} onClick={() => {
                                navigate("../")
                            }}>close</i>
                        </button>
                    </div>
                </div>
                <div className={"cartContent"}>
                    <div className={"inCartItemSection"}>
                        <div className={"inCartItem"}>
                            <div className={"menuImg"}></div>
                            <p className={"menuTitle"}>オフピークカツカレー</p>

                            <p className={"menuPrice"}>¥9999</p>

                            <button>
                                <i className={"material-symbols-rounded"}>close</i>
                            </button>
                        </div>
                        <div className={"inCartItem"}>
                            <div className={"menuImg"}></div>
                            <p className={"menuTitle"}>オフピークカツカレー</p>

                            <p className={"menuPrice"}>¥9999</p>

                            <button>
                                <i className={"material-symbols-rounded"}>close</i>
                            </button>
                        </div>
                        <div className={"inCartItem"}>
                            <div className={"menuImg"}></div>
                            <p className={"menuTitle"}>オフピークカツカレー</p>

                            <p className={"menuPrice"}>¥9999</p>

                            <button>
                                <i className={"material-symbols-rounded"}>close</i>
                            </button>
                        </div>
                        <div className={"inCartItem"}>
                            <div className={"menuImg"}></div>
                            <p className={"menuTitle"}>オフピークカツカレー</p>

                            <p className={"menuPrice"}>¥9999</p>

                            <button>
                                <i className={"material-symbols-rounded"}>close</i>
                            </button>
                        </div>


                    </div>
                    <div className={"totalPriceSection"}>
                        <p className={"totalPriceLabel"}>合計</p>
                        <p className={"totalPriceNumber"}>¥9999</p>
                    </div>
                </div>
                <div className={"proceedBtnSection"}>
                <button className={"btnBack"}>もっと選ぶ</button>
                <button className={"btnProceed"}><span>決済へ進む</span>
                    <i className={"material-symbols-rounded"}>arrow_circle_right</i>
                </button>
                </div>
            </div>
        </>
    )
}