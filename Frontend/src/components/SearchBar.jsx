import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../contexts/ShopContext"
import { assets } from "../assets/assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

export function SearchBar() {

    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisble] = useState(false);
    const location = useLocation(); //using locatin hook we can get the path of the url
    
    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisble(true);
        }
        else{
            setVisble(false);
        }
    },[location])


    return showSearch && visible ? (
        <>
         <div className="border-t border-b bg-gray-50 text-center">
            <div className=" inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input 
                value={search}
                onChange={(e) =>setSearch(e.target.value)}
                className="flex-1 outline-none bg-inherit text-sm"
                type="text"
                placeholder="Search" />
                <img
                className=" w-4" 
                 src={assets.search_icon} alt="Search_icon" />
            </div>
            <img
            onClick={() => setShowSearch(false)}
            className="inline w-3 cursor-pointer" 
            src={assets.cross_icon} alt="Cross_icon" />
         </div>
        </>
    ): null
}