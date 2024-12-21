import { IoMdShare } from "react-icons/io";
import NavbarApp from "../components/Navbar/NavbarApp";
import { GoPencil } from "react-icons/go";
import { LuFileText } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { FaCoins, FaPiggyBank } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineTableRestaurant } from "react-icons/md";
import ButtonAboutEvent from "../components/Buttons/ButtonAboutEvent";

const ResumenEvent = () => {
    return ( <>
            <div className="w-[100vw] h-[100vh] bg-[#f2f2f2]">
                <div className="md:block relative">
                    <NavbarApp/>
                </div>
                <div className="w-[100%] bg-base overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
                    <main className="w-full h-full">
                        <section className="bg-[#f2f2f2] w-full md:py-10 px-2 md:px-0">
                            <div className="md:max-w-screen-lg mx-auto inset-x-0 flex-col flex gap-8 pb-20">
                                <div className="w-full bg-white shadow rounded-xl overflow-hidden relative flex flex-col-reverse md:flex-row md:h-72 gap-12 md:gap-0 pt-10 md:pt-0">
                                    <img src="https://organizador.bodasdehoy.com/cards/cumpleanos.webp" alt="" className="md:w-1/2 md:h-full h-60 object-cover object-top rounded-xl" />
                                    <div className="absolute top-3 right-5 flex gap-2 z-30">
                                        <div className="w-1 h-1 -translate-y-0.5">
                                            <div className="flex relative cursor-pointer -translate-x-2" style={{left: 11}}>

                                            </div>
                                        </div>
                                        <span className="transition transform z-30 text-gray-300">
                                            <IoMdShare className="w-6 h-6"/>
                                        </span>
                                        <span className="transition transform hover:scale-110 *hover:rotate-12 cursor-pointer z-30">
                                            <GoPencil className="w-6 h-6 text-[#f7628c]"/>
                                        </span>
                                    </div>
                                    <div className="md:w-1/2 h-full flex flex-col items-center justify-center px-8 gap-6 relative">
                                        <div className="w-max mx-auto inset-x-0 text-center">
                                            <h1 className="font-display font-medium text-3xl text-gray-500">
                                                Nombre evento 
                                            </h1>
                                            <span className="font-display font-base text-sm flex gap-2 mx-auto w-max inset-x-0">
                                                <p className="text-gray-500">
                                                    Fecha del evento
                                                </p>
                                                <p>
                                                   - 
                                                </p>
                                                <p className="text-[#f7628c]">
                                                    Categoria
                                                </p>
                                            </span>
                                        </div>
                                        <div className="w-full">
                                            <span className="w-full justify-between flex">
                                                <p className="font-display text-xs text-gray-500">
                                                    Estado
                                                </p>
                                                <p className="font-display text-xs text-gray-500">
                                                ¡A celebrar! ¿Empezamos?
                                                </p>
                                            </span>
                                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <svg className="bg-[#f7628c] h-full" width="20%">
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-full justify-between flex">
                                            <div className="w-1/3 grid place-items-center">
                                                <p className="font-display text-lg font-base text-gray-500">
                                                    0 de 3
                                                </p>
                                                <p className="font-display text-center text-xs font-base text-gray-500 first-letter:capitalize">
                                                    pasos para completar tu evento
                                                </p>
                                            </div>
                                            <div className="w-1/3 grid place-items-center">
                                                <p className="font-display text-lg font-base text-gray-500">
                                                    0
                                                </p>
                                                <p className="font-display text-center text-xs font-base text-gray-500 first-letter:capitalize">
                                                    Invitados
                                                </p>
                                            </div>
                                            <div className="w-1/3 grid place-items-center">
                                                <p className="font-display text-lg font-base text-gray-500">
                                                    0 de 0
                                                </p>
                                                <p className="font-display text-center text-xs font-base text-gray-500 first-letter:capitalize">
                                                invitados sentados en tu evento
                                                </p>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full grid md:grid-cols-2 gap-4 md:gap-8">
                                    <div className="bg-yellow-400 space-x-3 rounded-lg text-white flex items-center justify-center py-1.5 px-5 shadow-lg font-display text-xl cursor-pointer ">
                                        <LuFileText className=" w-6 h-6 scale-x-90"/>
                                        <span>
                                            Ver mis <span>Itinerarios</span>
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <div className="bg-blue-300 space-x-3 rounded-lg text-white flex justify-between items-center pl-1.5 md:pl-5 shadow-lg font-display text-xl select-none h-full ">
                                            <span>
                                                Lugar del evento
                                            </span>
                                            <div className="bg-white w-[45.8%] md:w-[62.54%] rounded-lg h-[40px] flex items-center justify-between relative px-2 cursor-pointer">
                                            <label className="flex-1 font-display font-base text-sm text-gray-700 leading-3">Finca La Hacienda Novelda</label>
                                                <IoSearchOutline className="w-6 h-6 text-blue-300"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex md:flex-row flex-col justify-center gap-4 md:gap-8">
                                    <div className="w-[50%]* md:w-1/3 box-border">
                                        <h2 className="font-display text-xl font-semibold text-gray-500 pb-2 text-left first-letter:capitalize">
                                            presupuesto
                                        </h2>
                                        <div className="w-full shadow rounded-xl bg-white py-4 flex flex-col gap-4 h-48 items-center justify-center">
                                            <div>
                                                <div className="grid grid-cols-2 gap-24">
                                                    <div className=" mx-auto inset-x-0 w-max flex flex-col justify-center items-center -active">
                                                        <span className="py-1">
                                                            <FaPiggyBank className="w-20 h-14 text-gray-500"/>
                                                        </span>
                                                        <p className="font-display font-semibold text-lg text-gray-700 leading-6">
                                                            US$0.00
                                                        </p>
                                                        <p className="font-display font-base text-xs text-gray-500">
                                                            Estimado
                                                        </p>
                                                    </div>
                                                     <div className=" mx-auto inset-x-0 w-max flex flex-col justify-center items-center -active">
                                                        <span className="py-1">
                                                            <FaCoins className="w-20 h-14 text-gray-500"/>
                                                        </span>
                                                        <p className="font-display font-semibold text-lg text-gray-700 leading-6">
                                                            US$0.00
                                                        </p>
                                                        <p className="font-display font-base text-xs text-gray-500">
                                                            Gastado
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="focus:outline-none rounded-lg border border-[#f7628c] px-2 mx-auto inset-x-0 font-display text-[#f7628c] text-sm py-1 hover:text-white hover:bg-primary transition">
                                                Anadir gastos
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-1/2* md:w-2/3">
                                        <h2 className="font-display text-xl font-semibold text-gray-500 pb-2 text-left first-letter:capitalize">
                                            Mis invitados
                                        </h2>
                                        <div className="w-full bg-white shadow rounded-xl py-4 flex flex-col gap-4 h-48 items-center justify-center">
                                            <div>
                                                <div className="grid grid-cols-3 gap-28">
                                                    <div className=" flex-col flex items-center justify-center w-full text-gray-500 swiper-slide-active">
                                                        <HiUsers className="w-20 h-12"/>
                                                        <p className="font-display font-semibold text-xl text-gray-700">
                                                            0 de 0
                                                        </p>
                                                        <p className="font-display font-ligth text-xs text-gray-700">
                                                            Por confirmar
                                                        </p>
                                                    </div>
                                                    <div className=" flex-col flex items-center justify-center w-full text-gray-500 swiper-slide-active">
                                                        <HiUsers className="w-20 h-12"/>
                                                        <p className="font-display font-semibold text-xl text-gray-700">
                                                            0 de 0
                                                        </p>
                                                        <p className="font-display font-ligth text-xs text-gray-700">
                                                            Por confirmar
                                                        </p>
                                                    </div>
                                                    <div className=" flex-col flex items-center justify-center w-full text-gray-500 swiper-slide-active">
                                                        <HiUsers className="w-20 h-12"/>
                                                        <p className="font-display font-semibold text-xl text-gray-700">
                                                            0 de 0
                                                        </p>
                                                        <p className="font-display font-ligth text-xs text-gray-700">
                                                            Por confirmar
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="focus:outline-none rounded-lg border border-[#f7628c] px-2 mx-auto inset-x-0 font-display text-[#f7628c] text-sm py-1 hover:text-white hover:bg-primary transition">
                                                Anadir invitados
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full bg-[#f7628c] rounded-2xl h-16 flex shadow-md md:overflow-hidden relative">
                                    <div className="w-full md:w-4/5 flex items-center justify-between px-10 ">
                                        <h3 className="font-display font-semibold hidden md:block text-2xl text-white first-letter:capitalize"> 
                                            Invitaciones
                                        </h3>
                                        <div className="flex gap-6 w-full justify-center md:justify-end ">
                                            <p className="font-display text-xs md:text-lg text-white font-light flex gap-2 items-center">
                                                enviadas
                                                <span className="text-lg md:text-2xl font-semibold">
                                                0
                                                </span>
                                            </p>
                                            <p className="font-display text-xs md:text-lg text-white font-light flex gap-2 items-center">
                                                por enviar
                                                <span className="text-lg md:text-2xl font-semibold">
                                                0
                                                </span>
                                            </p>
                                            <p className="font-display text-xs md:text-lg text-white font-light flex gap-2 items-center">
                                                confirmadas
                                                <span className="text-lg md:text-2xl font-semibold">
                                                0
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-1/2 md:w-1/5 h-1/2 md:h-full top-0 right-0 transform -translate-y-2/3 md:translate-y-0 absolute md:relative bg-white rounded-2xl md:rounded-l-2xl flex items-center justify-center shadow">
                                        <div>
                                            <p className="font-display font-ligth text-sm text-[#f7628c] cursor-pointer hover:scale-105 transition transform">
                                                Ver mis <span className="font-bold"> Invitaciones</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex-col flex md:flex-row justify-center gap-8 ">
                                    <div className="w-full md:w-3/5 box-border">
                                        <h2 className="font-display text-xl font-semibold text-gray-500 pb-2 text-left first-letter:capitalize">
                                            Mis mesas
                                        </h2>
                                        <div className="w-full shadow rounded-xl bg-white py-4 gap-4 md:gap-16 flex flex-col md:flex-row h-max items-center justify-center">
                                            <div className=" flex flex-col space-y-3 md:space-y-1 ">
                                                <div className="grid md:grid-cols-3 justify-items-center items-center space-y-2">
                                                    <div className="text-regular font-display text-xs text-gray-700 capitalize col-span-1 font-semibold ">
                                                        recepción
                                                    </div>
                                                    <div className="flex space-x-10 col-span-2">
                                                        <span className="flex flex-col justify-center items-center gap-2* w-max">
                                                            <MdOutlineTableRestaurant className="text-gray-500 w-16 h-14" />
                                                            <p className="font-display font-semibold text-xl text-gray-700">
                                                                    0
                                                            </p>
                                                            <p className="font-display text-xs text-gray-700 w-full capitalize">
                                                                Total de mesas
                                                            </p>
                                                        </span>
                                                        <span className="flex flex-col justify-center items-center gap-2* w-max">
                                                            <MdOutlineTableRestaurant className="text-gray-500 w-16 h-14" />
                                                            <p className="font-display font-semibold text-xl text-gray-700">
                                                                    0
                                                            </p>
                                                            <p className="font-display text-xs text-gray-700 w-full capitalize">
                                                                invitados sentados
                                                            
                                                            </p>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-3 justify-items-center items-center space-y-2">
                                                    <div className="text-regular font-display text-xs text-gray-700 capitalize col-span-1 font-semibold ">
                                                        ceremonia
                                                    </div>
                                                    <div className="flex space-x-10 col-span-2">
                                                        <span className="flex flex-col justify-center items-center gap-2* w-max">
                                                            <MdOutlineTableRestaurant className="text-gray-500 w-16 h-14" />
                                                            <p className="font-display font-semibold text-xl text-gray-700">
                                                                    0
                                                            </p>
                                                            <p className="font-display text-xs text-gray-700 w-full capitalize">
                                                                Total de mesas
                                                            </p>
                                                        </span>
                                                        <span className="flex flex-col justify-center items-center gap-2* w-max">
                                                            <MdOutlineTableRestaurant className="text-gray-500 w-16 h-14" />
                                                            <p className="font-display font-semibold text-xl text-gray-700">
                                                                    0
                                                            </p>
                                                            <p className="font-display text-xs text-gray-700 w-full capitalize">
                                                                invitados sentados
                                                            </p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="rounded-lg border border-[#f7628c] px-2 font-display text-[#f7628c] text-sm py-1 hover:text-white hover:bg-primary transition focus:outline-none">
                                                    Ver mesas
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/5 box-border">
                                        <h2 className="font-display text-xl font-semibold text-gray-500 pb-2 text-left first-letter:capitalize">
                                            lista de regalos
                                        </h2>
                                        <div className="w-full shadow rounded-xl bg-white py-4 flex flex-col items-center gap-2 justify-center">
                                            <div className="flex-col gap-3 flex">
                                                <span className="grid grid-cols-2 items-center gap-2 w-max">
                                                    <p className="font-display font-semibold justify-end text-xl text-gray-700 flex ">
                                                        1000 <span>€</span>
                                                    </p>
                                                    <p className="font-display font-base text-xs mx-auto left-0 text-gray-500 w-full">
                                                        Recaudados
                                                    </p>
                                                </span>
                                                <span className="grid grid-cols-2 items-center gap-2 w-max">
                                                    <p className="font-display font-semibold justify-end text-xl text-gray-700 flex ">
                                                        10 <span>€</span>
                                                    </p>
                                                    <p className="font-display font-base text-xs mx-auto left-0 text-gray-500 w-full">
                                                        Participantes
                                                    </p>
                                                </span>
                                            </div>
                                            <button className="bg-[#fbff4e] w-2/3 rounded-lg font-display text-gray-700 text-sm py-1 hover:bg-gray-300 hover:text-white transition focus:outline-none">
                                                Activar mi lista
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-max">
                                    <h2 className="font-display text-xl font-semibold text-gray-500 pb-2 text-left first-letter:capitalize">
                                        Sobre mi evento
                                    </h2>
                                    <div>
                                        <div className="grid grid-cols-4 gap-4">
                                            <ButtonAboutEvent/>
                                            <ButtonAboutEvent/>
                                            <ButtonAboutEvent/>
                                            <ButtonAboutEvent/>
                                            
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
 
export default ResumenEvent;