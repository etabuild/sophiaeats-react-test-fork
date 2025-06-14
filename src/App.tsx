

import './assets/fonts/Fonts.css'
//import './App.css'

import { Routes, Route} from 'react-router-dom'
import {RootView} from "./route/navigation/RootView.tsx";
import {Cart} from "./route/Cart/";
import {Payment} from "./route/Payment/";

import {useEffect} from "react";
import {useAuth} from "./features/firebase/auth/Auth.tsx";
import {Test} from "./test/Test.tsx";
import {VerifyPayment} from "./route/VerifyPayment";



function App() {
    const {initAuth} = useAuth()
    useEffect(() => {
        initAuth()

    }, []);
    return (

        <>

                <Routes>
                    <Route path={"/"} element={<RootView />}/>
                    <Route path={"/cart"} element={<Cart />}/>
                    <Route path={"/verify-payment"} element={<VerifyPayment />}/>

                    <Route path={"/cart/payment"} element={<Payment />} />
                    <Route path={"/test"} element={<Test />} />
                </Routes>
        </>
    );
}

export default App
