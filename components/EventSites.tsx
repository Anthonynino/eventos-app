import CardImg from "./Cards/CardImg";
import sites from "../app/sites.json";
import { FaCamera } from "react-icons/fa";
import CardInfo from "./Cards/CardInfo";
import ButtonRecomend from "./Buttons/ButtonRecomend";

const EventSites = () => {
    return ( 
        <>
            <div className="w-full xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto inset-x-0 flex flex-col gap-5 md:gap-6 md:pt-14 pb-10 z-20 px-3">
                <h2 className="text-[#1ca6af] undefined font-bold  px-5 md:px-0 z-20 relative text-normal md:text-xl ">
                    Descubre <span className="text-[#1ca6af] font-light"> Lugares para bodas </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
                    {sites.map((site,index) => (
                        <CardImg key={index} sites={site} />
                    ))}

                </div>
            </div>
            <div className=" flex flex-col w-full">
                <div className="w-max flex flex-col items-center h-full mx-auto inset-x-0">
                    <h2 className="text-[#1ca6af] w-max text-center text-lg md:text-2xl text-primary font-semibold cursor-default">
                        Empresas de bodasd destacadas
                    </h2>
                    <p className="text-[#1ca6af] font-light text-sm w-full text-right text-primary cursor-pointer hover:text-gray-400 transition">
                        Ver todos los proveedores
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-5 md:grid md:grid-cols-1 mt-10 w-full md:mb-0 h-96">
                    <div className="flex w-[25%]">
                        <CardInfo/>
                        
                        
                    </div>
                    
                </div>
                <button className="md:hidden rounded-full w-max px-6 py-2 mx-auto inset-x-0 bg-[#1ca6af] text-white text-sm border border-primary hover:bg-white hover:text-[#1ca6af] focus:outline-none">
                        Ver más
                </button>
            </div>
            <div className="max-w-screen-lg mx-auto inset-x-0 w-full">
                <div className="ml-7 pt-2 md:pt-0 md:ml-0">
                    <h2 className="text-[#1ca6af] text-xl font-bold  px-5 md:px-0 z-20 relative undefined">
                        Recomendados <span className="text-[#1ca6af] font-light">para tu boda</span>
                    </h2>
                </div>
                <div className="w-full mx-auto md:pl-0 overflow-hidden text-white">
                    <ButtonRecomend/>
                    
                </div>
            </div>
        </>
     );
}
 
export default EventSites;