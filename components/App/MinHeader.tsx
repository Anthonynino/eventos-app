'use client';

import { MdShare } from "react-icons/md";
import { usePathname } from "next/navigation";

interface MinHeaderProps {
    category: string;
    name: string
}

const MinHeader: React.FC<MinHeaderProps> = ({category, name}) => {

    const pathname = usePathname();

    const getTitle = () => {
        switch (pathname) {
            case '/invitados':
                return 'Invitados';
            case '/mesas':
                return 'Mesas';
            case '/lista-regalos':
                return 'Lista de regalos';
            case '/presupuesto':
                return 'Presupuesto';
            case '/invitaciones':
                    return 'Invitaciones';
            case '/Itinerario':
                return 'Itinearario';
            default:
                return 'Lista de regalos';
        }
    };


    return ( <>
        <div className="w-full h-14 bg-white rounded-xl shadow-lg flex items-center justify-between">
            <div className="flex md:flex-1 flex-col px-2 md:px-6 font-display">
                <span className="text-gray-500 text-[18px] leading-[20px] font-semibold">
                    {getTitle()}
                </span>
            </div>
            <div className="flex-1 md:flex-none md:w-[35%] h-[100%] flex flex-row-reverse md:flex-row items-center ">
                <img src="https://organizador.bodasdehoy.com/cards/cumpleanos.webp" alt=""  className=" h-[90%] object-cover object-top rounded-md border-1 border-gray-600 hidden md:block"/>
            <div className="hidden md:flex flex-col font-display font-semibold text-md text-gray-500 px-2 md:pt-2 gap-2">
                <span className="text-sm translate-y-2 text-[#1ca6af] text-[12px] first-letter:capitalize">
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