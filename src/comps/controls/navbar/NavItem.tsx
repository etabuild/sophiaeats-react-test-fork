import {useAtom} from "jotai/index";
import {navStateAtom} from "../../../atoms.ts";

type NavItemProps = {
    icon: string
    label: string
    navKey: "home" | "menu" | "favorite" | "ticket"

}

export function NavItem  ({ icon, label,navKey }: NavItemProps){
    const [navState, setNavState] = useAtom(navStateAtom)
    console.log(navKey)
    return (
        <div className={
            navState==navKey?"navbarItem focused":"navbarItem"
        } onClick={()=>setNavState(navKey)}>
            <div className="navbarItemIcon">
                <span className="material-symbols-rounded">{icon}</span>
            </div>
            <div className="navbarItemTitle">{label}
            </div>
        </div>
    )
}