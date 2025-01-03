import { MdShare } from "react-icons/md";

interface MinHeaderProps {
    category: string;
    name: string
}

const MinHeader: React.FC<MinHeaderProps> = ({category, name}) => {
    return ( <>
        <div className="w-full h-14 bg-white rounded-xl shadow-lg flex items-center justify-between">
            <div className="flex md:flex-1 flex-col px-2 md:px-6 font-display">
                <span className="text-gray-500 text-[18px] leading-[20px] font-semibold">
                    Lista de regalos
                </span>
            </div>
            <div className="flex-1 md:flex-none md:w-[35%] h-[100%] flex flex-row-reverse md:flex-row items-center ">
                <img src="https://organizador.bodasdehoy.com/cards/cumpleanos.webp" alt=""  className=" h-[90%] object-cover object-top rounded-md border-1 border-gray-600 hidden md:block"/>
            <div className="hidden md:flex flex-col font-display font-semibold text-md text-gray-500 px-2 md:pt-2 gap-2">
                <span className="text-sm translate-y-2 text-[#f7628c] text-[12px] first-letter:capitalize">
                    {category}
                </span>
                <span className="uppercase w-64 truncate ">
                    {name}
                </span> 
            </div>
            <div className="flex">
                <div className="flex items-center justify-center">
                    <span className="transition transform text-gray-300 z-30 translate-y-2* -translate-x-1.5 md:-translate-y-3* md:-translate-x-6">
                        <MdShare className="w-6 h-6"/>
                    </span>
                </div>
            </div>
                                    
            </div>
    </div>
    </> );
}
 
export default MinHeader;