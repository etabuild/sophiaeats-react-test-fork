import {AppBar} from "../AppBar";
import {NavBar} from "../NavBar";
import {NavItem} from "../NavItem";
import styles from "./AppLayout.module.css"

export const AppLayout = ({children}: { children:React.ReactNode }) => {
    return (
        <>
            <AppBar />
            <div className={styles.pageContainer}>
                {children}
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