import {AppLayout} from "../../components/layout/AppLayout";

import { Home} from "./Home"

import {useAtomValue} from "jotai/index";
import {navStateAtom} from "../../atoms.ts";
import {MenuBook} from "./MenuBook";
import {Favorite} from "./Favorite";
import {Tickets} from "./Tickets";
import {Modal} from "../../comps/ui/modal/Modal.tsx";

export const RootView = () => {
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
            <Modal></Modal>
            <AppLayout>
                {mainView()}
            </AppLayout>

        </>
    )
}