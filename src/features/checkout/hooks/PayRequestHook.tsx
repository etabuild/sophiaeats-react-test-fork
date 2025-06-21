import {useAtomValue} from "jotai/index";
import {authStateAtom, inCartItemAtom} from "../../../atoms.ts";

export const usePayRequest = () => {
    const inCartItems = useAtomValue(inCartItemAtom)
    const authState = useAtomValue(authStateAtom)
    const requestPayPay = async () => {
        const items = inCartItems.map((item) =>({
            id: item.data.id,
            amount: item.quantity
        }));
        fetch(`${import.meta.env.VITE_BACKEND_EXPRESS_PORT}/purchase-by-paypay`, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {

                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                itemList: items,
                uid: authState.uid,
            })
        }).then(res => res.json().then(data => {

            console.log(`paypayにリダイレクトします：${data.data.url}`)
            window.location.href = data.data.url;
        }))
    }
    return {requestPayPay}
};