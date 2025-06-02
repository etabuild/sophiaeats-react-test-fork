import logo from "../assets/logo/logo_with_title.svg"
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