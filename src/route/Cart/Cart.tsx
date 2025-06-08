import './cart.css'
import type {DishMenuItem} from "../../features/dish-menu/type.ts";
import type {NavigateFunction} from "react-router-dom";
type CartProps = {
    navigate: NavigateFunction;
    list: DishMenuItem[]
}
export const Cart = ({navigate, list}:CartProps) => {

    return (
        <>
            <div className={"cartRoot"}>
                <div className={"cartHeader"}>
                    <p><i className={"material-symbols-rounded"}>shopping_cart</i><span>カート</span></p>
                    <div className={"cartHeaderCloseBtnWrapper"}>
                        <button className={"cartHeaderCloseBtn"}>
                            <i className={"material-symbols-rounded"} onClick={() => {
                                navigate("../", { replace: true })
                            }}>close</i>
                        </button>
                    </div>
                </div>
                <div className={"cartContent"}>
                    <div className={"inCartItemSection"}>
                        {list.map((item, i) => (
                            <div className={"inCartItem"} key={i}>
                                <div style={{background: `url()`, backgroundSize: 'cover'}} className={"menuImg"}></div>
                                <p className={"menuTitle"}>{item.name_ja}</p>

                                <p className={"menuPrice"}>¥{item.price}</p>

                                <button>
                                    <i className={"material-symbols-rounded"}>delete</i>
                                </button>
                            </div>

                        ))}



                    </div>
                    <div className={"totalPriceSection"}>
                        <p className={"totalPriceLabel"}>合計</p>
                        <p className={"totalPriceNumber"}>¥{

                        }</p>
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