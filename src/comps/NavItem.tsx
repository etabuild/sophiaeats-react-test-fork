import {useAtom} from "jotai/index";
import {navStateAtom} from "../atoms.ts";

type NavItemProps = {
    icon: string
    label: string
    key: string

    onClick?: () => void
}

export const NavItem = ({ icon, label, onClick,key }: NavItemProps) => {
    const [navState, setNavState] = useAtom(navStateAtom)
    console.log(key)
    return (
        <div className={
            navState==key?"navbarItem focused":"navbarItem"
        } onClick={()=>console.log(key)}>
            <div className="navbarItemIcon"><span
                className="material-symbols-rounded">{icon}</span>
            </div>
            <div className="navbarItemTitle">{label}
            </div>
        </div>
    )
}