
import type { ReactNode } from 'react'

type NavbarProps = {
    children: ReactNode
}

export const NavBar = ({ children }:
    NavbarProps) => {

    return (
        <div className="navBarBorder">
            <div className='navbar'>{children}</div></div>)
}