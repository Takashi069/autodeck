import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { MdElectricRickshaw } from "react-icons/md";
import Select from 'react-select';
import "./component.css"
const Search = () => {
    
    const [searchType, setSearchType] = useState("Name")
    const options = [
        { value: 'Name', label: <IoIosContact size={20}/> },
        { value: 'Phone', label: <BsFillTelephoneFill  size={20}/> },
        { value: 'NumberPlate', label: <MdElectricRickshaw  size={20}/> },
      ];
    return ( 
        <div className="flex justify-center ">
            {/* <span>{searchType}</span> */}
            <span id="dropDown" className="flex flex-row max-w-[80%]">

                {
                    /* <select name="search-parameter" id="search-parameter" className="text-center border-none active:border-none rounded-lg p-2 mb-2" onChange={(e)=>{setSearchType(e.target.value)}}>
                            <option value="Name" ><IoIosContact size={30}/></option>
                            <option value="Phone"><BsFillTelephoneFill/></option>
                            <option value="Vehicle Number"><MdElectricRickshaw/></option>
                    </select> */
                }
                 <input 
                    type={searchType === "Name" || searchType === "NumberPlate" ? "text":"number"} 
                    className=" border-solid border-[#ffd300] text-center rounded-md p-1 max-w-[100%]  " 
                    placeholder={searchType === "Name" ? "Name" : searchType === "Phone" ? "Phone Number" : "Number Plate"}
                    autoFocus
                ></input>
                <Select
                    defaultMenuIsOpen={false}
                    onChange={(e)=>{setSearchType(e.value)}}
                    options={options}
                />
               
            </span>
        </div>
     );
}
 
export default Search;