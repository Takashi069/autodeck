import { motion } from "framer-motion";
import Calc from "./Calc";
import RateTable from "./RateTable";

const PopUp = ({isCalc,isRate,setToggleCalc,setRate}) => {
    return ( 
        <motion.div 
            key="popup"
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            
        >
            {isRate && <RateTable key="RateTable" setRateTable={setRate} isRate={isRate}/>}
            <br />
            <br />
            {isCalc && <Calc key="Calculator" setToggleCalc={setToggleCalc}/>}
            <br></br>
        </motion.div>
     );
}
 
export default PopUp;