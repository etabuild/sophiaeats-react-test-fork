
import type {NavBarProps} from "../../../components/layout/NavBar";



export const NavBar = ({ children }:
    NavBarProps) => {

    return (
        <>        {/*<div className={'blurObj'}></div>*/}
            <div className='navbar floating'>{children}</div></>)
}