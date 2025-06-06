import {Modal} from "./comps/controls/modal/Modal.tsx";
import {AppBar} from "./comps/AppBar.tsx";
import {NavBar} from "./comps/controls/navbar/NavBar.tsx";
import {NavItem} from "./comps/controls/navbar/NavItem.tsx";
import {useAtomValue} from "jotai/index";
import {navStateAtom} from "./atoms.ts";
import {Ticket} from "./comps/Ticket.tsx";
import {Home} from "./comps/Home.tsx";
import {Menu} from "./comps/Menu.tsx";
import {Favorite} from "./comps/Favorite.tsx";

export const RootView = () => {
    const navState = useAtomValue(navStateAtom)

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
                    <Favorite />
                )
            default:
                return (
                    <Home />
                )
        }
    }
    return (
        <>
            <Modal />
            <AppBar />

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
        </>
    )
}