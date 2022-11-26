import Search from "./Search";
import {  AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import './component.css'


const Header = ({toggleSearch,searchType,setSearchType, searchData,setSearchData}) => {

    return (
        <AnimatePresence>
            {
                <motion.div 
                    className="bg-white sticky w-[100%] p-3 navbar" 
                    key="header"
                    animate={{height: toggleSearch ? 190 : 100}}
                   
                >
                    <div className="flex flex-row justify-evenly items-start">
                        <h1 className="text-left font-extrabold text-3xl mb-7 mt-3 text-[#ffc300] ">autodeck</h1>
                        <Link to="/contact"><button className="
                                                            p-2 
                                                            bg-[#ffd300] 
                                                            min-w-[20%] 
                                                            self-center 
                                                            mb-1 
                                                            text-white 
                                                            text-xl 
                                                            rounded-lg 
                                                            active:scale-90 
                                                            transition-all 
                                                            duration-500"
                                            >Feedback
                                            </button>
                        </Link>
                    </div>
                    
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
                                <Search searchType={searchType} setSearchType={setSearchType} searchData={searchData} setSearchData={setSearchData}/>
                            </motion.div>
                        }
                    </AnimatePresence>
                
                </motion.div>
            }
        </AnimatePresence>
     );
}
 
export default Header;