import {NavBar} from './NavBar.tsx'
import type {NavBarProps} from "./index.ts";
export const NavBarContainer = ({children}:NavBarProps) => {
    return (
        <>
            <NavBar>
                {children}
            </NavBar>
        </>

    )
}