import Search from "./Search";
import {  AnimatePresence, motion } from "framer-motion";
import './component.css'

const Header = ({toggleSearch}) => {

    return (
        <AnimatePresence>
            {
                <motion.div 
                    className="bg-white sticky w-[100%] p-3 navbar" 
                    key="header"
                    animate={{height: toggleSearch ? 190 : 100}}
                   
                >
                    <h1 className="text-left font-extrabold text-3xl mb-7 mt-3 text-[#ffc300] ">AUTODECK</h1>
                    
                    <AnimatePresence>
                        { 
                        toggleSearch && 
                            <motion.div
                                key="searchPopUp"
                                initial={{ opacity:0,scale:0}}
                                animate={{ opacity:1,scale:1 }}
                                exit={{opacity:0,scale:0}}
                                transition={{scale:{
                                    duration:1
                                }}}
                            >
                                <Search/>
                            </motion.div>
                        }
                    </AnimatePresence>
                
                </motion.div>
            }
        </AnimatePresence>
     );
}
 
export default Header;