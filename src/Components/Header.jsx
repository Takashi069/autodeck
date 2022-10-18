import Search from "./Search";
import { useState } from "react";

const Header = () => {
    const [toggleSearch, setToggleSearch] = useState(false)

    return ( 
        <div className="navbar bg-slate-600 sticky w-[100%] p-3 ">
            <h1 className="text-left font-extrabold text-3xl mb-7">AUTODECK</h1>
            {toggleSearch && <Search/>}
        </div>
     );
}
 
export default Header;