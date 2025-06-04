import { useEffect, useState } from 'react'
import { Home } from './comps/Home'
import './App.css'
import { useAtom } from 'jotai'
import { navStateAtom } from './atoms'
import { NavBar } from './comps/NavBar'
import {Ticket} from './comps/Ticket'
import {Favorite} from './comps/Favorite'
import { NavItem } from './comps/NavItem'
import { AppBar } from './comps/AppBar'
import { Menu } from './comps/Menu'
import {Modal} from "./comps/controls/modal/Modal.tsx";
function App() {


    const [navState, setNavState] = useAtom(navStateAtom)

    const mainView = () => {
        switch (navState) {
            case "ticket":
                return(
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
                    <Favorite></Favorite>
                )
            default:
                return (
                    <Home></Home>
                )
        }
    }
    return (
        <>
            <Modal />
        <AppBar></AppBar>

            <div className="mainView">
                {
                    mainView()
                }
            </div>
            
            <NavBar>
                <NavItem icon="home" label="ホーム"  navKey="home" />
                <NavItem icon="menu_book" label="メニュー" navKey="menu" />
                <NavItem icon="favorite" label="お気に入り" navKey="favorite" />
                <NavItem icon="qr_code" label="食券" navKey="ticket" />

            </NavBar>
            {/*
            <div className="navbar"> 
                <div className={
                     navState !== 'home'?'navbarItem focused':'navbarItem' 
                }>
                    <div className="navbarItemIcon">
                        <span className="material-symbols-rounded">
                        home
                        </span>
                    </div>
                    <div className="navbarItemTitle">ホーム</div>
                </div>
                <div className="navbarItem"
                onClick={()=>{
                    setNavState('menu')
                }}>
                    <div className="navbarItemIcon">
                        <span className="material-symbols-rounded">
                        menu_book
                        </span>
                    </div>
                    <div className="navbarItemTitle">メニュー</div>
                </div>
                <div className="navbarItem">
                    <div className="navbarItemIcon">
                        <span className="material-symbols-rounded">
                        favorite
                        </span>

                    </div>
                    <div className="navbarItemTitle">お気に入り</div>
                </div>
                <div className="navbarItem">
                    <div className="navbarItemIcon">
                        <span className={"material-symbols-rounded"}>qr_code</span> </div>
                    <div className="navbarItemTitle">食券</div>
                    
                </div>
            </div>
            */}
        </>
    );
}

export default App
