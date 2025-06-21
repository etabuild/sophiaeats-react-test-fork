import {Payment} from "./Payment"
import {PageLayout} from "../../components/layout/PageLayout";
import {useNavigate} from "react-router-dom";
import {useAtomValue} from "jotai/index";
import {authStateAtom, inCartItemAtom} from "../../atoms.ts";
import {usePayRequest} from "../../features/checkout/hooks/PayRequestHook.tsx";

export const PaymentContainer = () => {
    const navigate = useNavigate();
    const authState = useAtomValue(authStateAtom)
    const inCartItems = useAtomValue(inCartItemAtom);
    const {requestPayPay} = usePayRequest()
    const paypay = async() => {
        console.log(import.meta.env.VITE_BACKEND_EXPRESS_PORT)
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
            console.log(data.data.url)
            window.location.href = data.data.url;
        }))

    }
    return (
        <PageLayout pageIcon={"shopping_cart_checkout"}
                    pageTitle={"支払い"}
                    navigate={navigate}
                    navigatePath={"./../cart/"}
        >
            <Payment paypayFunction={requestPayPay}
            />
        </PageLayout>
    )
}
