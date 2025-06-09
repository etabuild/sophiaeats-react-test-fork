import type {ReactNode} from 'react'
import styles from "./NavBar.module.css"
import {LinearBlur} from "../../../lib/progressive-blur/LinearBlur.tsx";
type NavbarProps = {
    children: ReactNode
}
export const NavBar = ({children}:
                       NavbarProps) => {
    return (
        <>
            <div className={`${styles.navbar} ${styles.floating}`}>{children}</div>
            <LinearBlur
                steps={8}
                strength={64}
                falloffPercentage={100}
                tint="#FEF5EC99"
                side={"bottom"}
                style={{
/*                    background: 'linear-gradient(0deg, #ffe4ce00 0%, #ffe4ceFF 60%)',
                    background: '#ffe4ce',*/
                    zIndex: 0,
                    position: "fixed",
                    bottom:' 0px',
                    left: 0,
                    right: 0,
                    height: '100px'
                }}
            ></LinearBlur>        </>
    )
}