

import './assets/fonts/Fonts.css'
//import './App.css'

import { Routes, Route} from 'react-router-dom'
import {RootView} from "./route/navigation/RootView.tsx";
import {Cart} from "./route/Cart/";
import {useEffect} from "react";
import {useAuth} from "./features/firebase/auth/Auth.tsx";
import {Test} from "./test/Test.tsx";



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
                    <Route path={"/test"} element={<Test />} />
                </Routes>
        </>
    );
}

export default App
