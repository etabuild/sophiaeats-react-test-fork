
import type { ReactNode } from 'react'

type NavbarProps = {
    children: ReactNode
}

export const NavBar = ({ children }:
    NavbarProps) => {

    return (
        <>        {/*<div className={'blurObj'}></div>*/}
            <div className='navbar floating'>{children}</div></>)
}