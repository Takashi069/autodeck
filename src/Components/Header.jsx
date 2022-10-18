import Search from "./Search";
import { useEffect} from "react";

import './component.css'

const Header = ({toggleSearch}) => {
    useEffect(()=>{
        if(toggleSearch){

        }
    },[toggleSearch])
    return ( 
        <div className="bg-slate-600 sticky w-[100%] p-3 navbar" >
            <h1 className="text-left font-extrabold text-3xl mb-7">AUTODECK</h1>
            {toggleSearch && <Search/>}
        </div>
     );
}
 
export default Header;