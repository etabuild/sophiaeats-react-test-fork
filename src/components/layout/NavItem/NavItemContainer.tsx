import {NavItem} from './NavItem'
import {navStateAtom} from "../../../atoms.ts";
import {useAtom} from "jotai/index";
import type {NavItemProps} from "./index.ts";
export const NavItemContainer = ({label, navKey, icon}: NavItemProps) => {
    const [navState, setNavState] = useAtom(navStateAtom)
    return(
        <NavItem label={label} icon={icon} navKey={navKey} navState={navState} switchNav={()=>{
            setNavState(navKey)
        }} />
    )
}