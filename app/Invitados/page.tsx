import MinHeader from "../components/MinHeader";
import NavbarApp from "../components/Navbar/NavbarApp";
import { FaClock, FaPlusCircle } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { PiPicnicTable } from "react-icons/pi";
import GuestTable from "../components/Guest/GuestTable";

const Guest = () => {
    return ( <>
        <div className="w-[100vw] h-[100vh]">
            <div className="md:block relative">
                <NavbarApp/>
            </div>
            <div className="w-[100%] bg-[#f2f2f2] overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
                <main className="w-full h-full">
                    <section className="bg-[#f2f2f2] w-full pb-6 pt-2 md:py-0">
                        <div className="max-w-screen-lg mx-auto inset-x-0 w-full px-2 md:px-0 gap-4 relative">
                            <MinHeader name="Asd" category="Cumpleanos"/>
                            <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-6 md:my-2 py-1 md:border-b-4 md:border-[#f7628c] relative">
                                <div className="absolute* md:static z-10 translate-y-[6px] md:translate-y-0 flex gap-10 items-center justify-center h-full w-full md:col-span-2 md:py-4">
                                    <div className="flex gap-1 items-center justify-end ">
                                        <p className="font-display font-semibold text-2xl md:text-4xl text-[#f7628c]">
                                            0
                                        </p>
                                        <p className="font-display text-sm md:text-[16px] text-[#f7628c]">
                                            Invitados
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:gap-1 items-start justify-center h-full col-span-1">
                                        <p className="font-display font-semibold text-sm md:text-[16px] text-gray-500 flex gap-1">
                                            0 <span className="text-xs font-normal"> Adultos</span>
                                        </p>
                                        <p className="font-display font-semibold text-sm md:text-[16px] text-gray-500 flex gap-1">
                                            0 <span className="text-xs font-normal"> Ninos y Bebes</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl col-span-3 shadow-lg flex *items-end md:items-center pb-1 md:pb-0 w-full h-[88px] md:h-auto relative justify-between px-8 md:px-4">
                                    <div className="hidden md:flex gap-2 items-center justify-center">
                                        <FaClock className="text-[#fffb4e] w-8 h-8"/>
                                        <span>
                                            <p className="font-display md:text-lg font-semibold text-gray-700 leading-5">
                                                0 de 0
                                            </p>
                                            <p className="font-display text-xs font-medium text-gray-500">
                                                Por confirmar
                                            </p>
                                        </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-center">
                                        <IoCheckmarkCircle className="w-8 h-8 text-green-300"/>
                                    <span>
                                            <p className="font-display md:text-lg font-semibold text-gray-700 leading-5">
                                                0 de 0
                                            </p>
                                            <p className="font-display text-xs font-medium text-gray-500">
                                             confirmardos
                                            </p>
                                        </span>
                                    </div>
                                    <div className="flex gap-2 items-center justify-center">
                                        <FaCircleXmark className="w-8 h-8 text-[#f7628c]"/>
                                    <span>
                                            <p className="font-display md:text-lg font-semibold text-gray-700 leading-5">
                                                0 de 0
                                            </p>
                                            <p className="font-display text-xs font-medium text-gray-500">
                                                Cancelados
                                            </p>
                                        </span>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-40 h-40 bg-[#f7628c] rounded-full col-span-1 absolute right-0 flex-col items-center justify-center z-20">
                                    <PiPicnicTable className="text-white w-20 h-14" />
                                    <p className="font-display text-md font-semibold text-white first-letter:capitalize">
                                        Sentar <span className="font-normal">Invitados</span>
                                    </p>
                                    <button className="focus:outline-none bg-[#fbff4e] rounded-lg text-gray-700 font-display text-sm font-semibold px-2 ">
                                            Anadir Mesa
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white min-h-full w-full shadow-lg rounded-xl h-full md:px-6 pt-2 md:pt-6 pb-28 mb-32 md:mb-0 md:p-12 relative">
                                <div className="flex items-center justify-between relative">
                                    <div className="flex gap-2 items-center mt-1 mb-3 md:mb-5 mx-2">
                                        <button className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#f7628c] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#f7628c] hover:text-white transition border border-[#f7628c] md:bg-[#f7628c] md:text-white md:hover:bg-white md:hover:text-[#f7628c] capitalize">
                                            <FaPlusCircle />
                                            invitados
                                        </button>
                                        <button className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#f7628c] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#f7628c] hover:text-white transition border border-[#f7628c] capitalize">
                                            <FaPlusCircle />
                                            Grupo
                                        </button>
                                        <button className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#f7628c] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#f7628c] hover:text-white transition border border-[#f7628c] capitalize">
                                            <FaPlusCircle />
                                            Menu
                                        </button>
                                        <button className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#f7628c] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#f7628c] hover:text-white transition border border-[#f7628c] capitalize">
                                            Exportar
                                        </button>
                                    </div>
                                </div>
                                <div className="relative overflow-x-auto md:overflow-x-visible">
                                    <div className="w-[200%] md:w-[100%]">
                                        <GuestTable/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </> );
}
 
export default Guest;