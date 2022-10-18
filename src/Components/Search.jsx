import { useState } from "react";

const Search = () => {
    
    const [searchType, setSearchType] = useState("Name")

    return ( 
        <div className="flex justify-center ">
            {/* <span>{searchType}</span> */}
            <span id="dropDown" className="flex flex-col max-w-[80%]">
                <select name="search-parameter" id="search-parameter" className="text-center border-none active:border-none rounded-lg p-2 mb-2" onChange={(e)=>{setSearchType(e.target.value)}}>
                    <option value="Name">Name</option>
                    <option value="Phone">Phone</option>
                    <option value="Vehicle Number">Vehicle Number</option>
                </select>
                <input type="text" className="text-center rounded-md p-2" placeholder="Search"></input>
            </span>
        </div>
     );
}
 
export default Search;