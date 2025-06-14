import {Cart} from "./Cart.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useCart} from "../../features/pick-dish/hooks/AddItemHook.tsx";
import type {DishMenuItem} from "../../features/dish-menu/type.ts";
import {useDishMenu} from "../../features/dish-menu/hooks/DishMenuHook.tsx";
import {useAtomValue} from "jotai/index";
import {dishMenuListAtom} from "../../atoms.ts";

export const CartContainer = () => {
    useEffect(()=>{

    },[])
    const { searchMenuById} = useDishMenu()
    const dishMenuList = useAtomValue(dishMenuListAtom)
    const {inCartItem, totalPrice} = useCart()
    const navigate = useNavigate();
    const inCartDishMenuList = inCartItem.map((item) =>{

        const dishMenu = dishMenuList.find(({id})=> id === item.data.id)
        return{...dishMenu, amount: item.amount}
    }).filter(item=> item != undefined)
    const list = [
        {name: '鶏唐揚げ定食', price: 550, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaNt5ObLITauyY8OnKHSmXlvIkAOYVIVLMw&s'},
        {name: 'カツカレー', price: 450, imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Katsu-curry_003.jpg'},
        {name: 'イーグルランチ', price: 480, imgSrc:'https://upload.wikimedia.org/wikipedia/commons/a/a8/Salad_platter02_crop.jpg'}
    ]

    return (
        <>
            <Cart navigate={navigate} list={inCartDishMenuList} totalPrice={totalPrice}></Cart>
        </>
    );
};