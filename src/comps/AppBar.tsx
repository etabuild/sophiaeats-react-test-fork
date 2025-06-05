import logo from "../assets/logo/logo-with-text.svg"
import {useNavigate} from "react-router-dom";
export function AppBar(){
    const navigate = useNavigate();
    return(
        <>
        <div className="appBar">
            <img className="appBarLogo" src={logo}/>
            <div className="appBarBtnContainer">
                <button className="appBarBtn focused">
                    <span className="material-symbols-rounded">
                        language
                    </span>
                </button>
                <button className="appBarBtn focused" onClick={()=>{
                    navigate('/cart/')
                }}>
                    <span className="material-symbols-rounded">
                        shopping_cart
                    </span>
                </button>

            </div>

        </div>
        </>
    )
}