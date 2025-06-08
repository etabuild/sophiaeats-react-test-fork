

import './assets/fonts/Fonts.css'
import './App.css'

import { Routes, Route} from 'react-router-dom'
import {RootView} from "./RootView.tsx";
import {Cart} from "./comps/Cart.tsx";
import {useEffect} from "react";
import {useAuth} from "./features/firebase/auth/Auth.tsx";



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

                </Routes>
        </>
    );
}

export default App
