import './component.css'
import { AiOutlineSearch,AiOutlineMenu, AiOutlineClose,AiOutlineInfoCircle } from "react-icons/ai";
import { BiCalculator, BiRupee } from "react-icons/bi";
import { useState } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
const FloatingMenu = ({toggleSearch, setToggleSearch,toggleCalc,setToggleCalc,toggleRate,setToggleRate}) => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return (
        <AnimatePresence> 
            <motion.div 
                key="menu"
                animate={{height: toggleMenu ? 240 : 100}}
                className='floating-menu flex flex-col p-3 bg-[#fcd450]'>
                {!toggleMenu && <AiOutlineMenu className='' size={35} onClick={()=>{setToggleMenu(!toggleMenu)}}/>}
                <AiOutlineSearch 
                    className={toggleMenu ? "mb-4 button-animate":"hidden mb-4 button-animate"} 
                    size={35} 
                    onClick={()=>{setToggleSearch(!toggleSearch); setToggleRate(false); setToggleCalc(false)}}
                />
                <BiRupee 
                    className={toggleMenu ? "mb-4 button-animate":"hidden mb-4 button-animate"} 
                    size={35}
                    onClick={()=>{setToggleRate(!toggleRate); setToggleSearch(false); setToggleCalc(false)}}
                />
                <BiCalculator 
                    className={toggleMenu ? "mb-4 button-animate":"hidden mb-4 button-animate"} 
                    size={35}
                    onClick={()=>{setToggleCalc(!toggleCalc); setToggleSearch(false); setToggleRate(false);}}
                />
                <a  href = "https://autodeck-info.netlify.app" 
                    className={toggleMenu ? "mb-4 button-animate":"hidden mb-4 button-animate"}
                >
                    <AiOutlineInfoCircle 
                        size={30}
                    />
                </a>
                
                {toggleMenu && <AiOutlineClose className='mb-4 button-animate' size={35} onClick={()=>{setToggleMenu(!toggleMenu)}}/>}
            </motion.div>  
        </AnimatePresence>
     );
}
 
export default FloatingMenu;