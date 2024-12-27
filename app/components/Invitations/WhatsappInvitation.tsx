import { FaRegLightbulb } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const WhatsappInvitation = () => {
    return ( <>
        <div className="col-span-3 pt-4 md:p-6 w-full">
            <div className="shadow-md rounded-2xl w-full mx-auto inset-x-0 md:h-60 py-8 md:p-4 font-display flex flex-col gap-2">
                <form action="" className="md:w-1/2 flex flex-col gap-2 mx-auto">
                    <h3 className="font-normal text-gray-500 first-letter:uppercase"> 
                         WhatsApp de prueba
                    </h3>
                    <div className=" w-full h-max relative">
                        <label htmlFor="" className=" font-display text-[#f7628c] text-sm w-full">
                            Numero de telefono
                        </label>
                        <div className=" w-full relative flex items-center">
                            <input type="tel" className="jsx-d228716525057fa1 false font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined" />
                        </div>
                    </div>
                    <div className="group flex relative ">
                        <button className="focus:outline-none hover:opacity-70 transition bg-[#f7628c] text-white rounded-xl text-sm px-5 py-2 mt-4 w-full">
                            Enviar whatsapp de prueba
                       </button>
                        <div className="group-hover:opacity-100 w-max gap-2 flex items-center font-display transition-opacity bg-emerald-600 px-10 py-1 text-sm text-gray-100 rounded-3xl absolute left-1/2 -translate-x-1/2 translate-y-[70px] opacity-0 m-4 mx-auto">
                            <FaRegLightbulb className="w-6 h-6"/>
                            <span>
                                Primero debes añadir la imagen de la invitación
                            </span>
                        </div>
                    </div>
                </form>
                <div className="text-yellow-500 flex items-center justify-center space-x-1 md:my-2 text-sm cursor-default gap-4">
                    <div className="flex md:flex-row flex-col gap-4">
                        <p className="flex gap-1 items-center">
                            <IoDiamondOutline/> Activar la version <span className="font-semibold cursor-pointer">Premiun</span>
                        </p>

                        <button className="text-sm text-white bg-[#f7628c] px-7 py-1 rounded-lg">
                                Empezar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default WhatsappInvitation;