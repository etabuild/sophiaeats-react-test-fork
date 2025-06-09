import {AppBar} from "../components/layout/AppBar";
import {AppLayout} from "../components/layout/AppLayout";
import { NavBar } from "../components/layout/NavBar";
import {NavItem} from "../components/layout/NavItem";
import { Home} from "../route/navigation/Home"
import {CardGrid} from "../components/ui/CardGrid";
import {DishMenuCard} from "../features/dish-menu/components/DishMenuCard";
import {useAtomValue} from "jotai/index";
import {PageLayout} from "../components/layout/PageLayout"
import {navStateAtom} from "../atoms.ts";
import {MenuBook} from "../route/navigation/MenuBook";
import {Favorite} from "../route/navigation/Favorite";
import {Tickets} from "../route/navigation/Tickets";
import {useNavigate} from "react-router-dom";

export const Test = () => {
    const navState = useAtomValue(navStateAtom)
    const navigate = useNavigate();

    const mainView = () => {
        switch (navState) {
            case "ticket":
                return(
                    <Tickets></Tickets>
                )
                break;
            case 'home':
                return (
                    <Home></Home>

                )
            case 'menu':
                return (
                    <MenuBook></MenuBook>
                )
            case 'favorite':
                return (
                    <Favorite/>
                )
            default:
                return (
                    <Home />
                )
        }
    }
    return (
        <>
            <PageLayout pageIcon={"shopping_cart_checkout"} pageTitle={"支払い"} navigate={navigate}>
                <h1>支払い方法を選択</h1>
            </PageLayout>
        </>
    )
}