import { useAtom } from "jotai";
import {authStateAtom} from "../../../atoms.ts";

export const useVerifyPay = () => {
    const [authState] = useAtom(authStateAtom);
    const verifyPayPay = (paymentId: string) => {
        fetch(`${import.meta.env.VITE_BACKEND_EXPRESS_PORT}/purchase-by-paypay`, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {

                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                paymentId,
                uid: authState.uid
            })
        })
    }
    return {}
}
