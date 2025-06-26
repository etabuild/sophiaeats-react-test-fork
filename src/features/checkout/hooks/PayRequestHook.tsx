import {useAtomValue} from "jotai/index";
import {authStateAtom, inCartItemAtom} from "../../../atoms.ts";
import {db} from "../../firebase/Firebase.tsx"
import {collection, query, where, getDocs, doc, getDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

export const usePayRequest = () => {
    const inCartItems = useAtomValue(inCartItemAtom)
    const authState = useAtomValue(authStateAtom)
    const navigate = useNavigate()
    const checkPendingPayment = async () => {
        const paymentLogRef = collection(db, "payment-log");
        const q = query(
            paymentLogRef,
            where("uid", "==", authState.uid),
            where("status", "==", "pending")
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size > 1) {
            console.log("Multiple pending payments found:", querySnapshot.docs.map(doc => doc.id));
        } else if (querySnapshot.size === 1) {
            await verifyPayPayPayment(querySnapshot.docs[0].id);
        }
    }
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
    const verifyPayPayPayment = async (paymentId: string) => {
        if(!paymentId) return;
        fetch(`${import.meta.env.VITE_BACKEND_EXPRESS_PORT}/verify-paypay-payment`, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uid: authState.uid,
                paymentId: paymentId,
            })
        }).then(res => res.json().then(async data => {
            switch(data.status){
                case "TICKET_ISSUED":
                    console.log("チケット発行済 トークン:", data.token)
                    navigate("../")
                    break;
                case "NOT_PAID":
                    { console.log("支払われていない")
                    const docRef = doc(db, "payment-log", paymentId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const url = docSnap.data().data.redirectUrl

                        console.log(`paypayにリダイレクトします：${url}`)
                        window.location.href = url;
                    }
                    break; }
                case "FAILED_ISSUE":
                    console.log("支払われているが、発行できなかった")
                    break;
                default:
                    console.log("エラー：", data)
            }

        }))

    }
    return {requestPayPay, verifyPayPayPayment, checkPendingPayment}
};