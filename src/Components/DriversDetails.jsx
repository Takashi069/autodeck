import useFetch from '../Hooks/useFetch'

function hasdriverInfo(condition,driverInfo){
    if(condition === "true"){
       
        return(
            // <div id="TaskList">
            // {tasks.map((task) => (
            //     <div id="Task" key={task.id}> 
            //         <div id="Task-Details">
            //             <h2>{task.taskName}</h2>
            //             <p>Due on: {task.taskDate}</p>
            //         </div>
            //         <button id="Complete" onClick={() => handleDelete(task.id, true)}>Completed</button>
            //         <button id="Delete" onClick={() => handleDelete(task.id, false)}>Delete</button>
            //     </div> 
            // ))}
            // </div>
            <div className="DriverList">
            {
                driverInfo.map((driver)=>(
                    <div key={driver.id} className="driver-details min-w-[80%] min-h-[15%] flex flex-row justify-evenly rounded-md hover:scale-105 hover:bg-[#f7f6f5] transition-all duration-300">
                        <div className="image m-3 bg-[#f7f6f9] p-2 rounded-md">
                            <img src={require("../assets/auto-rickshaw.png")} width="100px" height="100px" alt="autorickshaw"></img>
                        </div>
                        <div className="info m-1 p-2 flex flex-col rounded-md text-[#c49e24] text-left justify-center  ">
                            <h1 className="font-bold text-lg">{driver.name}</h1>
                            <h3>{driver.phoneNumber}</h3>
                            <h2 className="font-bold text-xl">{driver["Number Plate"]}</h2>
                        </div>
                    </div>
                ))
            }
            </div>
        )
    }else{
        return(
            <div className="DriverList flex flex-col justify-center">
               <div className='loader animate-spin'></div>
            </div>
        )
    }
}

const DriverDetails = () => {

    const {data:driverInfo } = useFetch("https://autodeck-database.herokuapp.com/driverDetails")
  
    let driversPresent
    if(driverInfo === null || Object.keys(driverInfo).length === 0)
        driversPresent = "false";
    else driversPresent = "true";
    return ( 
        hasdriverInfo(driversPresent,driverInfo)
     );
}
 
export default DriverDetails;