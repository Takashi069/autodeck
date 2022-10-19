import './component.css'
import { AiOutlineSearch,AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiCalculator, BiRupee } from "react-icons/bi";
import { useState } from 'react';
const FloatingMenu = ({toggleSearch, setToggleSearch}) => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return ( 
        <div className='floating-menu flex flex-col p-3'>
            {!toggleMenu && <AiOutlineMenu className='' size={35} onClick={()=>{setToggleMenu(!toggleMenu)}}/>}
            <AiOutlineSearch className={toggleMenu ? "mb-4 button-animate":"hidden mb-4 button-animate"} size={35} onClick={()=>{setToggleSearch(!toggleSearch)}}/>
            <BiRupee className={toggleMenu ? "mb-4 button-animate":"hidden mb-4 button-animate"} size={35}/>
            <BiCalculator className={toggleMenu ? "mb-4 button-animate":"hidden mb-4 button-animate"} size={35}/>
            {toggleMenu && <AiOutlineClose className='mb-4 button-animate' size={35} onClick={()=>{setToggleMenu(!toggleMenu)}}/>}
        </div>  
     );
}
 
export default FloatingMenu;