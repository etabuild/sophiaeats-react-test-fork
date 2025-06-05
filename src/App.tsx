import {useEffect, useState} from 'react'
import {Home} from './comps/Home'

import './assets/fonts/Fonts.css'
import './App.css'
import {useAtom, useAtomValue} from 'jotai'
import {navStateAtom} from './atoms'
import {NavBar} from './comps/NavBar'
import {Ticket} from './comps/Ticket'
import {Favorite} from './comps/Favorite'
import {NavItem} from './comps/NavItem'
import {AppBar} from './comps/AppBar'
import {Menu} from './comps/Menu'

import {Modal} from "./comps/controls/modal/Modal.tsx";
import { Routes, Route} from 'react-router-dom'
import {RootView} from "./RootView.tsx";
import {Cart} from "./comps/Cart.tsx";

function App() {


    const navState = useAtomValue(navStateAtom)

    const mainView = () => {
        switch (navState) {
            case "ticket":
                return (
                    <Ticket></Ticket>
                )
                break;
            case 'home':
                return (
                    <Home></Home>

                )
            case 'menu':
                return (
                    <Menu></Menu>
                )
            case 'favorite':
                return (
                    <Favorite/>
                )
            default:
                return (
                    <Home/>
                )
        }
    }
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
