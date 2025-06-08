import {AppBar} from "../components/layout/AppBar";
import {AppLayout} from "../components/layout/AppLayout";
import { NavBar } from "../components/layout/NavBar";
import {NavItem} from "../components/layout/NavItem";
import { Home} from "../route/navigation/Home"
import {CardGrid} from "../components/ui/CardGrid";
import {DishMenuCard} from "../features/dish-menu/components/DishMenuCard";
import {useAtomValue} from "jotai/index";
import {navStateAtom} from "../atoms.ts";
import {Ticket} from "../comps/Ticket.tsx";
import {MenuBook} from "../route/navigation/MenuBook";
import {Favorite} from "../route/navigation/Favorite";
import {Tickets} from "../route/navigation/Tickets";

export const Test = () => {
    const navState = useAtomValue(navStateAtom)

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
            <AppLayout>
                {mainView()}
            </AppLayout>

        </>
    )
}