
import type { ReactNode } from 'react'

type NavbarProps = {
    children: ReactNode
}

export const Navbar = ({ children }:
    NavbarProps) => {

    return <div className='navbar'>{children}</div>
}