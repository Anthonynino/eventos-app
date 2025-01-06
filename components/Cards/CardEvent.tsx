import { FaRegFolderOpen } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CardEvent = () => {
    return ( <>
        <div className=" w-max h-full relative grid place-items-center bg-white transition ">
            <div className="  h-32 w-10  absolute z-[10] right-0  flex flex-col items-center justify-between px-2 ">
                <div className=" w-max h-max relative">
                    <div className="flex relative cursor-pointer -translate-x-2">
                    </div>
                </div>
                <div className=" space-y-2">
                    <div className=" w-max h-max relative">
                        <IoMdShare className="w-6 h-6 cursor-pointer text-white false -translate-x-1"/>
                    </div>
                    <div className=" w-max h-max relative">
                        <FaRegFolderOpen  className="w-5 h-6 cursor-pointer text-white hover:text-gray-300"/>
                    </div>
                    <div className=" w-max h-max relative">
                        <MdDelete  className="w-6 h-6 cursor-pointer text-white hover:text-gray-300"/>
                    </div>
                </div>
            </div>
            <div className=" w-72 h-36 rounded-xl cardEvento z-[8] cursor-pointer shadow-lg relative overflow-hidden ">
                <img src="https://organizador.bodasdehoy.com/cards/cumpleanos.webp" className="image-overlay object-cover w-full h-full absolute top-0 left-0 object-top " alt="" />
                <div className=" relative w-full h-full z-10 p-4 pb-2 flex flex-col justify-between overlay-content ">
                <div className=" flex flex-col">
                    <span className=" text-sm font-display text-white capitalize">
                            Evento Category 
                            {
                            /* En este span va la categoria del evento que se cree, cumpleanos, boda, graduacion, etc */
                            }
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className=" capitalize text-lg font-display text-white">
                         Nombre {/* Aqui va el nombre del evento*/}
                    </span>
                    <span className=" mt-[-2px] uppercase text-xs font-display text-white">
                        Fecha
                    </span>
                    <span className="jsx-5213a39eec3ec821 mt-[-4px] uppercase text-xs font-display text-white">
                        Status {/* Aqui va el status del evento, pendiente, en proceso, finalizado */}
                    </span> 
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
            </div>
        </div>
    </> );
}
 
export default CardEvent;