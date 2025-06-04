
import type { ReactNode } from 'react'

type NavbarProps = {
    children: ReactNode
}

export const NavBar = ({ children }:
    NavbarProps) => {

    return (
            <div className='navbar'>{children}</div>)
}