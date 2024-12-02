import CardImg from "./Cards/CardImg";
import sites from "../sites.json";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CardInfo from "./Cards/CardInfo";

const EventSites = () => {
    return ( 
        <>
            <div className="w-full xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto inset-x-0 flex flex-col gap-5 md:gap-6 md:pt-14 pb-10 z-20 px-3">
                <h2 className="text-[#F7628C] undefined font-bold  px-5 md:px-0 z-20 relative text-normal md:text-xl ">
                    Descubre <span className="text-[#F7628C] font-light"> Lugares para bodas </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
                    {sites.map((site,index) => (
                        <CardImg key={index} sites={site} />
                    ))}

                </div>
            </div>
            <div className=" flex flex-col w-full pb-20">
                <div className="w-max flex flex-col items-center h-full mx-auto inset-x-0">
                    <h2 className="text-[#F7628C] w-max text-center text-lg md:text-2xl text-primary font-semibold cursor-default">
                        Empresas de bodasd destacadas
                    </h2>
                    <p className="text-[#F7628C] font-light text-sm w-full text-right text-primary cursor-pointer hover:text-gray-400 transition">
                        Ver todos los proveedores
                    </p>
                </div>
                <div className="md:grid md:grid-cols-1 mt-10 w-full mb-16 md:mb-0 h-96">
                    <div className="flex">
                        <CardInfo/>
                        <CardInfo/>
                        <CardInfo/>
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default EventSites;