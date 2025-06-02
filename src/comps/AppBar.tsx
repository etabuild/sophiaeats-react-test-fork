import logo from "../assets/logo/logo-with-text.svg"
export function AppBar(){
    return(
        <>
        <div className="appBar">
            <img className="appBarLogo" src={logo}/>
            <div className="appBarBtnContainer">
                <button className="appBarBtn">
                    <span className="material-symbols-rounded">
                        language
                    </span>
                </button>
                <button className="appBarBtn">
                    <span className="material-symbols-rounded">
                        shopping_cart
                    </span>
                </button>

            </div>

        </div>
        </>
    )
}