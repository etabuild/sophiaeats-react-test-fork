import logo from "../assets/logo/logo-with-text.svg"
export function AppBar(){
    return(
        <>
        <div className="appBar">
            <img className="appBarLogo" src={logo}/>
            <button className="appBarCartBtn"></button>
            </div>
        </>
    )
}