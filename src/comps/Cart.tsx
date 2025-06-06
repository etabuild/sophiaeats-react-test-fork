import './cart.css'
import {useNavigate} from "react-router-dom";

export const Cart = () => {
    const navigate = useNavigate();
    const list = [
        {name: '鶏唐揚げ定食', price: 550, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaNt5ObLITauyY8OnKHSmXlvIkAOYVIVLMw&s'},
        {name: 'カツカレー', price: 450, imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Katsu-curry_003.jpg'},
        {name: 'イーグルランチ', price: 480, imgSrc:'https://upload.wikimedia.org/wikipedia/commons/a/a8/Salad_platter02_crop.jpg'}
    ]
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
                                <div style={{background: `url(${item.imgSrc})`, backgroundSize: 'cover'}} className={"menuImg"}></div>
                                <p className={"menuTitle"}>{item.name}</p>

                                <p className={"menuPrice"}>¥{item.price}</p>

                                <button>
                                    <i className={"material-symbols-rounded"}>delete</i>
                                </button>
                            </div>

                        ))}



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