import './assets/fonts/Fonts.css'
//import './App.css'

import {Routes, Route} from 'react-router-dom'
import {RootView} from "./route/navigation/RootView.tsx";
import {Cart} from "./route/Cart/";
import {Payment} from "./route/Payment/";

import {useEffect} from "react";
import {useAuth} from "./features/firebase/auth/Auth.tsx";
import {Test} from "./test/Test.tsx";
import {VerifyPayment} from "./route/VerifyPayment";
import {ProtectedRoute} from './route/ProtectedRoute/ProctectedRoute.tsx';
import {ThemeProvider} from "./ThemeProvider.tsx";
import {useCart} from "./features/pick-dish/hooks/CartHook.tsx";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "./features/firebase/Firebase.tsx";
import { useAtom } from 'jotai';
import {authStateAtom, inCartItemAtom} from "./atoms.ts";
import {useDishMenu} from "./features/dish-menu/hooks/DishMenuHook.tsx";


function App() {
    const {signInGoogle} = useAuth()
    const {fetchCart} = useCart()
    const [authState] = useAtom(authStateAtom)

    useEffect(() => {
        if(!authState.uid){
            console.log("not sign in")
/*
            signInGoogle()
*/

        }
        fetchCart()
    }, []);

    return (

        <>

            <ThemeProvider>
            <ProtectedRoute>
                <Routes>
                    <Route path={"/"} element={<RootView/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/verify-payment"} element={<VerifyPayment/>}/>

                    <Route path={"/cart/payment"} element={<Payment/>}/>
                    <Route path={"/test"} element={<Test/>}/>
                </Routes>
            </ProtectedRoute></ThemeProvider>
        </>
    );
}

export default App
