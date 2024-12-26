import { FaListUl } from "react-icons/fa";

const LiCost = () => {
    return ( <>
        <li className="w-full justify-between items-center flex   px-5  transition ">
            <span className="gap-2 py-3 flex items-center capitalize">
                Gasto
            </span>
            <span className="gap-4 flex items-center py-3 md:py-0">
                    <div className="text-[13px]">
                    US$00.0
                    </div>
                    <div className="relative">
                    <FaListUl className="w-2 h-2 text-gray-400"/>
                    </div>
            </span>
        </li>
    </> );
}
 
export default LiCost;