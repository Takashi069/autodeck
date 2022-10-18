import './component.css'
import { AiOutlineSearch } from "react-icons/ai";

const FloatingMenu = ({toggleSearch, setToggleSearch}) => {
    
    return ( 
        <span className="floating-menu" onClick={()=>{setToggleSearch(!toggleSearch)}}>
            <AiOutlineSearch size={50}/>
        </span>
     );
}
 
export default FloatingMenu;