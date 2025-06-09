import {useAtom} from "jotai/index";
import {inCartItemAtom} from "../../../atoms.ts";
import {useDishMenu} from "../../dish-menu/hooks/DishMenuHook.tsx"
import {useEffect, useState} from "react";

export const useCart = () => {
    const [inCartItem, setInCartItem] = useAtom(inCartItemAtom)
    const {searchMenuById} = useDishMenu()
    const [totalPrice, setTotalPrice] = useState<number>(0)
    useEffect(() => {
/*        console.log("incartItem", inCartItem)
        let _price = 0;

        inCartItem.forEach((item) => {
            _price = item.data.price*item.amount
        })
        setTotalPrice(_price)*/

    }, [inCartItem]);
    const pickItem = (id: string, amount: number) => {
        const menu = searchMenuById(id);


        const index = inCartItem.findIndex(({data}) => data.id === id)
        if (index > -1) {
            setInCartItem((prev) => {
                const _p = prev
                _p[index] = {
                    data: _p[index].data,
                    amount: _p[index].amount + amount
                }
                return _p
            })
        } else {
            console.log("追加中", id)
            setInCartItem((prev) =>
                [...prev,
                    {
                        data: menu,
                        amount: amount
                    }
                ])
        }

    }
    const deleteItem = (deleteId: string) => {
        const index = inCartItem.findIndex(({data}) => data.id === deleteId)
        if (index > -1) {
            setInCartItem((prev) => {
                const _p = prev
                _p.splice(index, 1)
                return _p
            })
        } else {
            throw new Error("indexがなかった")

        }

    }
    return {pickItem, inCartItem, deleteItem, totalPrice}
}