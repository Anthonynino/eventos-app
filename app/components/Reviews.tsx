import { FaStar } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";

const Reviews = () => {
    return ( <>
        <div className="w-full col-span-4 flex flex-col gap-2 transition-all h-auto">
            <div className="w-full p-3 md:p-6 rounded-xl">
                <div className="flex items-center gap-3">
                    <LuMessageCircle className="text-[#f7628c] w-10 h-10"/>
                    <h2 className="text-lg text-gray-500">
                        Opiniones sobre el producto
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 pt-4 ">
                    <div className="w-full flex flex-col items-center text-gray-500 py-6 gap-1 md:border-r border-gray-400">
                        <h2 className="font-light text-5xl text-tertiary">
                            0.0
                        </h2>
                        <div className="flex items-center justify-center h-max gap-2">
                            <div className="flex  items-center  cursor-default">
                                <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                            </div>
                        </div>
                        <p className="text-sm">
                            0 Opiniones
                        </p>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-6 py-2">
                        <div className="flex flex-col gap-1 items-center text-[#49516f]">
                            <p className="text-sm">
                                Profesionalidad
                            </p>
                            <div className="flex items-center justify-center h-max gap-2">
                                <div className="flex  items-center  cursor-default">
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center text-[#49516f]">
                            <p className="text-sm">
                                Profesionalidad
                            </p>
                            <div className="flex items-center justify-center h-max gap-2">
                                <div className="flex  items-center  cursor-default">
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center text-[#49516f]">
                            <p className="text-sm">
                                Profesionalidad
                            </p>
                            <div className="flex items-center justify-center h-max gap-2">
                                <div className="flex  items-center  cursor-default">
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center text-[#49516f]">
                            <p className="text-sm">
                                Profesionalidad
                            </p>
                            <div className="flex items-center justify-center h-max gap-2">
                                <div className="flex  items-center  cursor-default">
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>
                                    <FaStar className="transition text-gray-400   w-4 h-4 mx-0.5 "/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="hover:opacity-90 transition focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white bg-[#f7628c]">
                Iniciar sesion
            </button>
        </div>
    </> );
}
 
export default Reviews;