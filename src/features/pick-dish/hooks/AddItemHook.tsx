import {useAtom} from "jotai/index";
import {inCartItemAtom} from "../../../atoms.ts";
import {useEffect} from "react";

export const useCart = ()=>{
    const [inCartItem, setInCartItem] = useAtom(inCartItemAtom)

    useEffect(() => {
        console.log("incartItem", inCartItem)
    }, [inCartItem]);
    const pickItem = (id: string, amount: number) => {
        const index = inCartItem.findIndex(({itemId}) => itemId === id)
        if (index > -1) {
            setInCartItem((prev)=>{
                const _p = prev
                _p[index] = {
                    itemId: id,
                    amount: _p[index].amount + amount
                }
                return _p
            })
        }else{
            console.log("追加中",id)
            setInCartItem((prev)=>[...prev,{itemId:id, amount:amount}])
        }

    }
    const deleteItem = (id: string) => {
        const index = inCartItem.findIndex(({itemId}) => itemId === id)
        if (index > -1) {
            setInCartItem((prev)=>{
                const _p = prev
                _p.splice(index, 1)
                return _p
            })
        }else{
            throw new Error("indexがなかった")

        }

    }
    return{pickItem, inCartItem, deleteItem}
}