import {AppBar} from "./AppBar";
import {useNavigate} from "react-router-dom";
export const AppBarContainer = () => {
    const navigate = useNavigate();
    return (
        <AppBar cartButtonClicked={()=>{
            navigate('/cart/')
        }}/>
    )
}