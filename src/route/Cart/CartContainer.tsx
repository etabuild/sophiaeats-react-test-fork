import {Cart} from "./Cart.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useCart} from "../../features/pick-dish/hooks/CartHook.tsx";
import type {DishMenuItem} from "../../features/dish-menu/type.ts";
import {useDishMenu} from "../../features/dish-menu/hooks/DishMenuHook.tsx";
import {useAtom, useAtomValue} from "jotai/index";
import {cartTotalAmountAtom, dishMenuListAtom} from "../../atoms.ts";

export const CartContainer = () => {

    const [totalPrice] = useAtom(cartTotalAmountAtom)
    const dishMenuList = useAtomValue(dishMenuListAtom)
    const {inCartItem, fetchCart} = useCart()
    const navigate = useNavigate();
    const inCartDishMenuList = inCartItem.map((item) =>{

        const dishMenu = dishMenuList.find(({id})=> id === item.data.id)
        return{...dishMenu, amount: item.quantity}
    }).filter(item=> item != undefined)
    useEffect(()=>{
        
        fetchCart()
    }, [])
    return (
        <>
            <Cart navigate={navigate} list={inCartDishMenuList} totalPrice={totalPrice}></Cart>
        </>
    );
};