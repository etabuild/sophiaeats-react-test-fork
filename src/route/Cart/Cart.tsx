import './cart.css'
import type {DishMenuItem} from "../../features/dish-menu/type.ts";
import type {NavigateFunction} from "react-router-dom";
import {PageLayout} from "../../components/layout/PageLayout";

type CartProps = {
    navigate: NavigateFunction;
    list: {
        id?: string,
        name_ja?: string,
        name_en?: string,
        category?: string,
        price?: number,
        shop?: string,
        amount: number
    }[];
    totalPrice: number;
}
export const Cart = ({navigate, list,totalPrice}: CartProps) => {

    return (
        <>
            <PageLayout pageIcon={"shopping_cart"} pageTitle={"カート"} navigate={navigate} navigatePath={"./../"}>

                <div className={"inCartItemSection"}>
                    {list.map((item, i) => (
                        <div className={"inCartItem"} key={i}>
                            <div style={{background: `url()`, backgroundSize: 'cover'}} className={"menuImg"}></div>
                            <p className={"menuTitle"}>{item.name_ja}</p>

                            <p className={"menuPrice"}>¥{item.price}</p>
{/*                            <select name={`x${item.amount}`} onSelect={(select) => console.log(select)}>
                                {[1, 2, 3, 4, 5].map((num) => {
                                    return(
                                    item.amount === num ? <option selected> x{num}</option>:<option>x{num}</option>
                                    )
                                })}
                            </select>*/}
                            <p className={"dropdown"}>x{item.amount}</p>
                            <button className={"deleteButton"}>
                                <i className={"material-symbols-rounded"}>delete</i>
                            </button>
                        </div>

                    ))}
{/*                    <div className={"inCartItem"} >
                        <div style={{background: `url()`, backgroundSize: 'cover'}} className={"menuImg"}></div>
                        <p className={"menuTitle"}>ロングオフピークカツカレー</p>

                        <p className={"menuPrice"}>¥1000</p>
                                                    <select name={`x${item.amount}`} onSelect={(select) => console.log(select)}>
                                {[1, 2, 3, 4, 5].map((num) => {
                                    return(
                                    item.amount === num ? <option selected> x{num}</option>:<option>x{num}</option>
                                    )
                                })}
                            </select>
                        <p className={"dropdown"}>x9</p>
                        <button className={"deleteButton"}>
                            <i className={"material-symbols-rounded"}>delete</i>
                        </button>
                    </div>*/}
                </div>
                <div className={"totalPriceSection"}>
                    <p className={"totalPriceLabel"}>合計</p>
                    <p className={"totalPriceNumber"}>¥{totalPrice}</p>
                </div>
                <div className={"proceedBtnSection"}>
                    <button className={"btnBack"}>もっと選ぶ</button>
                    <button className={"btnProceed"} onClick={()=>{navigate("./payment/")}}><span>決済へ進む</span>
                        <i className={"material-symbols-rounded"}>arrow_circle_right</i>
                    </button>
                </div>

            </PageLayout>
        </>
    )
}