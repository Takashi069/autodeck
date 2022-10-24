import {motion} from 'framer-motion';
import { BiRupee } from 'react-icons/bi';

const RateTable = ({setRateTable,isRate}) => {
    return ( 
        <motion.div 
            key="rateTable" 
            className="bg-white rounded-md min-h-[50vh] max-h-[60vh] min-w-[65%] max-w-[85%] shadow-sm flex flex-col justify-center items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
        >
            <br></br>
            <h1 className="text-xl font-extrabold text-[#ffd300]">RATE TABLE</h1>
            <br></br>
            <div className='grid grid-rows-4 grid-cols-2 gap-4 border-4 rounded-lg border-[#ffd300] m-4 p-3'>
                <p className='flex flex-row justify-center items-center transistion-all duration-500 hover:scale-105  '>
                    Kayamkulam Bus Stand
                </p>
                <p className='flex flex-row items-center justify-center text-lg font-bold text-[#746418] transistion-all duration-500 hover:scale-105'>
                    <BiRupee/>
                    350
                </p>
                <p className='flex flex-row justify-center items-center transistion-all duration-500 hover:scale-105'>
                    Kayamkulam Railway Station 
                </p>
                <p className='flex flex-row items-center justify-center text-lg font-bold text-[#746418] transistion-all duration-500 hover:scale-105'>
                    <BiRupee/>
                    400
                </p>
                <p className='flex flex-row justify-center items-center transistion-all duration-500 hover:scale-105'>
                    Karunagapally Bus Stand
                </p>
                <p className='flex flex-row items-center justify-center text-lg font-bold text-[#746418] transistion-all duration-500 hover:scale-105'>
                    <BiRupee/>
                    300
                </p>
                <p className='flex flex-row justify-center items-center transistion-all duration-500 hover:scale-105'>
                    Karunagapally Railway Station 
                </p>
                <p className='flex flex-row items-center justify-center text-lg font-bold text-[#746418] transistion-all duration-500 hover:scale-105'>
                    <BiRupee/>
                    300
                </p>
            </div>
            <button 
                className="font-bold text-xl bg-[#ffd300] p-2 rounded-lg active:scale-95 active:opacity-80 transition-all duration-250"
                onClick={()=>{setRateTable(false)}}
            >
                    Close
            </button>
        </motion.div>
    );
}
 
export default RateTable;