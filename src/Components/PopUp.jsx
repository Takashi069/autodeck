import { motion } from "framer-motion";
import Calc from "./Calc";


const PopUp = ({isCalc,isRate,setToggleCalc,setRate}) => {
    return ( 
        <motion.div 
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            
        >
            {console.log(isCalc)}
            {isCalc && <Calc setToggleCalc={setToggleCalc}/>}

        </motion.div>
     );
}
 
export default PopUp;