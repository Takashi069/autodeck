import { BiRupee } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { useState } from "react";
import {motion} from 'framer-motion';

const Calc = ({setToggleCalc}) => {
    const [persons,setPersons] = useState(1)
    const [rate,setRate] = useState(0)
    return ( 
        <motion.div 
            className="bg-white mb-[5%] rounded-md min-h-[40vh] max-h-[40vh] min-w-[65%] shadow-sm flex flex-col justify-center items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
        >
         
            <h1 className="text-xl font-extrabold text-[#ffd300]">RATE SPLITTER</h1>
            <br></br>
            <div className="Amount flex flex-row items-center justify-center h-[4vh] max-h-[4vh] min-w-[65%] ">
                <label className="mr-3"><BiRupee size={30}/></label>
                <input 
                    className=" border-4 border-solid border-[#ffd300] max-w-[65%] text-center rounded-md p-1   " 
                    type="number"
                    min="0"
                    onChange={(e)=>{setRate(e.target.value)}}
                >    
                </input>
            </div>
            <br></br>
            <div className="Amount flex flex-row items-center justify-center space-x-5 h-[4vh] max-w-[70%] max-h-[4vh] min-w-[70%] ">
                <label className="mr-3" htmlFor="personSlider"><BsFillPeopleFill size={25}/></label>
                <input 
                    id="personSlider"
                    className="border-2 border-[#ffd300] min-w-[65%] max-w-[85%] bg-yellow-50 rounded-lg appearance-none cursor-pointer range-sm accent-[#ffd300]  " 
                    type="range"
                    min="1"
                    max="5"
                    value={persons}
                    onChange={(e)=>{setPersons(e.target.value)}}
                >    
                </input>
                <span className="text-xl font-bold">{persons}</span>
            </div>
            <br></br>
            <br></br>

            <div className="ml-2 mr-2 SplitAmount flex flex-row items-center justify-center space-x-5 h-[4vh] max-h-[4vh] min-w-[65%] ">
                <span  className="text-lg font-bold max-w-[50%]" >Maximum Split Amount</span>
                <span className="rounded-md flex flex-row justify-center items-center min-w-[20%] max-w-[40%] text-md font-bold "><BiRupee />{Math.ceil(rate/persons)}</span>
            </div>
            <br></br>
            <br></br>
            <button 
                className="font-bold text-xl bg-[#ffd300] p-2 rounded-lg active:scale-95 active:opacity-80 transition-all duration-250"
                onClick={()=>{setToggleCalc(false)}}
            >
                Close
            </button>
        </motion.div>
     );
}
 
export default Calc;