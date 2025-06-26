import {VerifyPayment} from "./VerifyPayment.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {usePayRequest} from "../../features/checkout/hooks/PayRequestHook.tsx";

export const VerifyPaymentContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {verifyPayPayPayment} = usePayRequest()
    useEffect(() => {

        const paymentId = searchParams.get("payment-id")
        const paymentOption = searchParams.get("payment-option")
        console.log(paymentId, paymentOption)
        if(!paymentOption||!paymentId){
            return
        }
        if(paymentOption === "paypay"){
            verifyPayPayPayment(paymentId)
        }

    }, []);
    const navigate = useNavigate();
    return (
        <>
                <VerifyPayment navigate={navigate} />
        </>
    );
};