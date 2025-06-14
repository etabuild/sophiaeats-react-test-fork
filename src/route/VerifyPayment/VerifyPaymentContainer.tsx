import {VerifyPayment} from "./VerifyPayment.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const VerifyPaymentContainer = () => {
    useEffect(() => {

    }, []);
    const navigate = useNavigate();
    return (
        <>
                <VerifyPayment navigate={navigate} />
        </>
    );
};