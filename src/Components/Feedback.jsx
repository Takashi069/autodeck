import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence,motion } from "framer-motion";
import Select from 'react-select';

const Feedback = () => {
    const [feedbackType, setFeedBackType] = useState("GeneralFeedback")
    const options = [
        { value: 'GeneralFeedback', label: "General Feedback" },
        { value: 'Autodriver', label: "For Autodrivers: Request to be added to Website" },
    ];
    return ( 
        <div id="container-form" className="h-[100vh] w-[100%] bg-[#ffd300] flex justify-center items-center">
            <form className="
                        lg:h-[95%] 
                        h-full 
                        lg:w-[50%] 
                        sm:w-[80%]
                        w-[100%] 
                        flex 
                        flex-col 
                        justify-evenly 
                        bg-white 
                        sm:rounded-2xl 
                        hover:shadow-2xl 
                        transition-all 
                        duration-700 ">
                <div className="flex flex-row justify-around items-end">
                    <h1 className="text-6xl font-bold mt-5 text-[#ffd300] self-center">Feedback</h1>
                    <Link to="/">
                    <button className="
                            h-[40%] 
                            mb-2 
                            p-2
                            bg-[#ffd300] 
                            text-white 
                            rounded-lg 
                            active:scale-90 
                            transition-all 
                            duration-500"
                    >Go Back</button>
                </Link>
                </div>
                <br></br>
                <p className="text-xl ml-5 mt-5 text-[#ffd300] font-bold">We'd like to know what you have to say </p>
                <div className="flex flex-col items-start">
                    <p className="ml-5 mt-5 text-[#ffd300] font-bold">Feedback Type</p>
                    <div className=" ml-5 items-center">
                        <Select 
                            defaultMenuIsOpen={false}
                            defaultValue={options[0]}
                            onChange={(e)=>{setFeedBackType(e.value)}}
                            options={options}
                        />
                    </div>
                </div>
                <br></br>
                <div className="flex flex-col items-start ml-5">
                    <p className="text-slate-500 text-lg" >Name</p>
                    <input type="text" className="w-[90%] p-3 border-solid border-[#ffd300]" placeholder="Enter Name Here" required></input>
                </div>
                <AnimatePresence>
                { feedbackType === "Autodriver" &&
                    <motion.div
                    key="InfoInputs"
                    initial={{ opacity:0}}
                    animate={{ opacity:1 }}
                    exit={{opacity:0}}
                    transition={{opacity:{
                        duration:0.3
                    }}}
                    > 
                        <div className="flex flex-col items-start ml-5">
                            <p className="text-slate-500 text-lg">Phone Number</p>
                            <input type="number" className="w-[90%] p-3 border-solid border-[#ffd300]" placeholder="Enter Phone Number" required></input>
                        </div>
                        <br></br> 
                        <div className="flex flex-col items-start ml-5">
                            <p className="text-slate-500 text-lg">Vehicle Number</p>
                            <input type="text" className="w-[90%] p-3 border-solid border-[#ffd300]" placeholder="Enter Vehicle Number Here" required></input>
                        </div>
                    </motion.div>
                }
                </AnimatePresence>
                <div className="flex flex-col items-start ml-5">
                    <p className="text-slate-500 text-lg">Feedback Message</p>
                    {feedbackType === "GeneralFeedback" && 
                        <textarea className="w-[90%] p-3 border-solid border-[#ffd300]" placeholder="Enter Feedback" required></textarea>
                    }
                    {feedbackType !== "GeneralFeedback" && 
                        <textarea className="w-[90%] p-3 border-solid border-[#ffd300]" placeholder="Enter Feedback" ></textarea>
                    }
                </div>
                <button className="p-2 bg-[#ffd300] max-w-[20%] self-center mb-1 text-white text-xl rounded-lg active:scale-90 transition-all duration-500">Submit</button>
            </form>
        </div>
     );
}
 
export default Feedback;