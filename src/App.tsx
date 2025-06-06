

import './assets/fonts/Fonts.css'
import './App.css'

import { Routes, Route} from 'react-router-dom'
import {RootView} from "./RootView.tsx";
import {Cart} from "./comps/Cart.tsx";

function App() {

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
