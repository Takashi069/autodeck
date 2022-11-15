import { useState } from "react"

function errorMessage(){
    return(
        <h1>Error: Data Not Available<br/> Your requested information might not exist or the Server may be down</h1>
    )
}

function hasdriverInfo(condition,driverInfo,displayMessage,setDisplayMessage){
    if(condition === "true"){
        return(
          
            <div className="DriverList h-[100vh] grid grid-cols-1 lg:w-[90%] lg:grid-cols-2 lg:gap-x-[3rem]">
            {
                    driverInfo.map((driver)=>(

                        <div key={driver.id} className="driver-details  min-w-[80%] grid grid-cols-2 items-center justify-evenly rounded-md hover:scale-105 hover:bg-[#f7f6f5] transition-all duration-300">
                            <div className="image flex flex-row align-middle justify-center m-3 max-h-[8rem] bg-[#f7f6f9] p-2 rounded-md">
                                <img src={require("../assets/auto-rickshaw.png")} width="100px" height="100px" alt="autorickshaw"></img>
                            </div>
                            <div className="info m-1 p-2 flex flex-col rounded-md text-[#c49e24] text-left justify-center  ">
                                <h1 className="font-bold text-lg">{driver.name}</h1>
                                <h3><a href={'tel:'+driver.phoneNumber}>{driver.phoneNumber}</a></h3>
                                <h2 className="font-bold text-xl">{driver["Number Plate"]}</h2>
                            </div>
                        </div>
                ))
            }
            </div>
        )
    }else{
        setTimeout(()=>{
            setDisplayMessage(true)
        },15000)
        return(
            <div className="DriverList flex flex-col justify-center items-center">
                <div className='loader animate-spin'></div>
                <br />
               {
                displayMessage && errorMessage()
               }
               
            </div>
            
        )
    }
}

const DriverDetails = ({driverInfo}) => {

  
    let driversPresent
    const [displayMessage,setDisplayMessage] = useState(false);
    if(driverInfo === null || Object.keys(driverInfo).length === 0)
        driversPresent = "false";
    else driversPresent = "true";
    return ( 
        hasdriverInfo(driversPresent,driverInfo,displayMessage,setDisplayMessage)
     );
}
 
export default DriverDetails;