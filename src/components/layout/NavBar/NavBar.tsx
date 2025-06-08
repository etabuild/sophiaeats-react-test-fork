import type {ReactNode} from 'react'
import styles from "./NavBar.module.css"
type NavbarProps = {
    children: ReactNode
}
export const NavBar = ({children}:
                       NavbarProps) => {
    return (
        <>
            <div className={`${styles.navbar} ${styles.floating}`}>{children}</div>
        </>
    )
}