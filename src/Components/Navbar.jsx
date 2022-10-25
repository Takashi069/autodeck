import { AiOutlineSearch } from "react-icons/ai";
import { BiCalculator, BiRupee } from "react-icons/bi";
import { motion,AnimatePresence } from "framer-motion";
import Search from "./Search";

const Navbar = ({toggleSearch, setToggleSearch,toggleCalc,setToggleCalc,toggleRate,setToggleRate}) => {
    return ( 
        <motion.div 
            id="navbar" 
            className="fixed min-w-[15%] min-h-[100%] bg-[#ffd300] flex flex-col justify-evenly"
            key="header"
            animate={{width: toggleSearch ? 400 : 280}}
        >
            <h1 className="font-extrabold text-3xl mb-7 mt-3 text-[#ffff] text-center ">AUTODECK</h1>
            <AnimatePresence>
                        { 
                        toggleSearch && 
                            <motion.div
                                key="searchPopUp"
                                initial={{ opacity:0,scale:0}}
                                animate={{ opacity:1,scale:1 }}
                                exit={{opacity:0,scale:0}}
                                transition={{scale:{
                                    duration:0.5
                                }}}
                            >
                                <Search/>
                            </motion.div>
                        }
                    </AnimatePresence>
            <div id="utilities" className=" gap-4 justify-evenly items-center">
                <div 
                    className="flex flex-row items-center justify-center p-4 hover:text-[#ffd300] hover:bg-white button-animate cursor-pointer"
                    onClick={()=>{setToggleSearch(!toggleSearch)}}
                >
                    <AiOutlineSearch 
                        className={"mr-20 cursor-pointer"} 
                        size={35} 
                        // onClick={()=>{setToggleSearch(!toggleSearch)}}
                    />
                    <span className="text-2xl font-bold">Search</span>
                </div>
                <div 
                    className="flex flex-row items-center justify-center p-4 hover:text-[#ffd300] hover:bg-white button-animate cursor-pointer"
                    onClick={()=>{setToggleRate(!toggleRate)}}
                    
                >
                    <BiRupee 
                        className={"mr-10 cursor-pointer"} 
                        size={35}
                        // onClick={()=>{setToggleRate(!toggleRate)}}
                    />
                    <span className="text-2xl font-bold">Rate Chart</span>
                </div>
                <div 
                    className="flex flex-row items-center justify-center p-4  hover:text-[#ffd300] hover:bg-white button-animate cursor-pointer"
                    onClick={()=>{setToggleCalc(!toggleCalc)}}
                >
                    <BiCalculator 
                        className={"mr-10 cursor-pointer"} 
                        size={35}
                        // onClick={()=>{setToggleCalc(!toggleCalc)}}
                    />
                    <span className="text-2xl font-bold">Rate Splitter</span>
                </div>
                    
            </div>
        </motion.div>
     );
}
 
export default Navbar;