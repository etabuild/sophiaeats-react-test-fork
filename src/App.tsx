import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './comps/Home'
import './App.css'
import { useAtom } from 'jotai'
import { navStateAtom } from './atoms'
import { Navbar } from './comps/Navbar'
import { NavItem } from './comps/NavItem'
function App() {


    const [navState, setNavState] = useAtom(navStateAtom)

    const mainView = () => {
        switch (navState) {
            case 'home':
                return (
                    <Home></Home>

                )

            default:
                return (
                    <Home></Home>
                )
        }
    }
    return (
        <>

            <div>
                {
                    mainView()
                }
            </div>
            <Navbar>
                <NavItem icon="home" label="ホーム" onClick={() =>
                    setNavState("home")} />
                <NavItem icon="menu_book" label="メニュー" onClick={() => setNavState("menu")} />
                <NavItem icon="favorite" label="お気に入り" onClick={() => setNavState("favorite")} />
                <NavItem icon="qr_code" label="食券" />

            </Navbar>
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
