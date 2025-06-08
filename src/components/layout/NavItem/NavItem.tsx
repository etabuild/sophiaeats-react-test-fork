import styles from './NavItem.module.css'
import './NavItem.module.css'
import type {NavItemProps} from "./index.ts";

export const NavItem = ({label, icon, navKey, switchNav, navState}:{
    label: string,
    icon: string,
    navKey: NavItemProps["navKey"],
    navState: NavItemProps["navKey"],
    switchNav: ()=>void
}) => {
    return(
        <>
{/*            <div className={
                navState==navKey?"navbarItem focused":"navbarItem"
            } onClick={switchNav}>
                <div className={"navbarItemIcon"}>
                    <span className="material-symbols-rounded">{icon}</span>
                </div>
                <div className={"navbarItemTitle"}>{label}
                </div>
            </div>*/}
            <div className={
                navState==navKey?`${styles.navbarItem} ${styles.focused}`:styles.navbarItem
            } onClick={switchNav}>
                <div className={styles.navbarItemIcon} onClick={()=>{
                    console.log(styles.navbarItemIcon)
                }}>
                    <span className="material-symbols-rounded">{icon}</span>
                </div>
                <div className={styles.navbarItemTitle}>{label}
                </div>
            </div>
        </>
    )
}