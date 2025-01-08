'use client';

import MinHeader from "../../components/App/MinHeader";
import NavbarApp from "../../components/Common/NavbarApp";
import { FaClock, FaPlusCircle, FaTrash } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import {  FaCircleXmark } from "react-icons/fa6";
import { PiPicnicTable } from "react-icons/pi";
import GuestTable from "../../components/Guest/GuestTable";
import { useState } from "react";
import Modal from "@/components/Modal/NewEvent";
import { ImSpoonKnife } from "react-icons/im";

const Guest = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);

    const openModal1 = () => setIsModalOpen1(true);
    const closeModal1 = () => setIsModalOpen1(false);

    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);

    const openModal3 = () => setIsModalOpen3(true);
    const closeModal3 = () => setIsModalOpen3(false);

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
                            <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-6 md:my-2 py-1 md:border-b-4 md:border-[#1ca6af] relative">
                                <div className="absolute* md:static z-10 translate-y-[6px] md:translate-y-0 flex gap-10 items-center justify-center h-full w-full md:col-span-2 md:py-4">
                                    <div className="flex gap-1 items-center justify-end ">
                                        <p className="font-display font-semibold text-2xl md:text-4xl text-[#1ca6af]">
                                            0
                                        </p>
                                        <p className="font-display text-sm md:text-[16px] text-[#1ca6af]">
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
                                        <FaCircleXmark className="w-8 h-8 text-[#1ca6af]"/>
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
                                <div className="hidden md:flex w-40 h-40 bg-[#1ca6af] rounded-full col-span-1 absolute right-0 flex-col items-center justify-center z-20">
                                    <PiPicnicTable className="text-white w-20 h-14" />
                                    <p className="font-display text-md font-semibold text-white first-letter:capitalize">
                                        Sentar <span className="font-normal">Invitados</span>
                                    </p>
                                    <button  className="focus:outline-none bg-[#fbff4e] rounded-lg text-gray-700 font-display text-sm font-semibold px-2 ">
                                            Anadir Mesa
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white min-h-full w-full shadow-lg rounded-xl h-full md:px-6 pt-2 md:pt-6 pb-28 mb-32 md:mb-0 md:p-12 relative">
                                <div className="flex items-center justify-between relative">
                                    <div className="flex gap-2 items-center mt-1 mb-3 md:mb-5 mx-2">
                                        <button onClick={openModal1} className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#1ca6af] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#1ca6af] hover:text-white transition border border-[#1ca6af] md:bg-[#1ca6af] md:text-white md:hover:bg-white md:hover:text-[#1ca6af] capitalize">
                                            <FaPlusCircle />
                                            invitados
                                        </button>
                                        <button onClick={openModal2} className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#1ca6af] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#1ca6af] hover:text-white transition border border-[#1ca6af] capitalize">
                                            <FaPlusCircle />
                                            Grupo
                                        </button>
                                        <button onClick={openModal3} className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#1ca6af] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#1ca6af] hover:text-white transition border border-[#1ca6af] capitalize">
                                            <FaPlusCircle />
                                            Menu
                                        </button>
                                        <button className="focus:outline-none bg-white px-2 md:px-6 py-1 flex gap-1 md:gap-2 items-center justify-between text-[#1ca6af] font-display font-semibold text-[10px] md:text-sm rounded-lg hover:bg-[#1ca6af] hover:text-white transition border border-[#1ca6af] capitalize">
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
        <Modal isOpen={isModalOpen1} onClose={closeModal1}>
            <form className="w-full">
                <div className='border-l-2 border-gray-100 pl-3 w-full '>
                    <h2 className='font-display text-3xl capitalize text-[#1ca6af] font-light'>
                        Crear 
                    </h2>
                    <h2 className='font-display text-5xl capitalize text-gray-500 font-medium'>
                        Guest
                    </h2>
                </div>
                <div className="text-gray-500 font-body flex flex-col gap-4 w-full">
                    <div className="input-name w-full flex items-center justify-center relative pt-4">
                        <img src="https://organizador.bodasdehoy.com/profile_men.png" alt="" className="w-14 h-14 rounded-full mr-6 " />
                        <div className=" w-full h-max relative">
                            <label htmlFor="" className=" font-display text-[#1ca6af] text-sm w-full">
                            TELEFONO
                            </label>
                            <div className=" w-full relative flex items-center">
                                <div className=" absolute w-12 h-9 flex justify-start items-center cursor-pointer ml-[1.5px] pl-2 bg-slate-100 rounded-l-xl mt-[1px]">
                                    <img src="https://organizador.bodasdehoy.com/flags-svg/ve.svg" alt="" className=" border-[1px] border-gray-500" />
                                </div>
                                <input type="phone" className=" pl-14 font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:grid md:grid-cols-4 items-center justify-center space-x-3">
                        <div className="col-span-3">
                            <div className=" w-full h-max relative">
                                <label htmlFor="" className=" font-display text-[#1ca6af] text-sm w-full">Nombre</label>
                                <div className=" w-full relative flex items-center">
                                    <input type="text" className=" false font-display text-sm text-gray-500 border-[1px] border-rose-300 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined" />
                                </div>
                                <p className=" font-display absolute rounded-xl text-xs text-red flex gap-1">

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-full flex gap-6">
                        <div className="w-1/2 flex-col flex gap-2 relative">
                            <div className=" relative w-full">
                                <label htmlFor="" className="font-display text-sm text-[#1ca6af] w-full capitalize">Sexo</label>
                                <div className="flex h-8 items-center justify-center relative">
                                    <div  className="font-display text-center w-1/2 h-8 border rounded-md border-gray-100 py-1 text-sm rounded-l-lg focus:outline-none hover:bg-secondary hover:text-[#1cb6] capitalize cursor-pointer transition bg-secondary text-[#1ca6af]">
                                        Hombre
                                    </div>
                                    <div className="w-1/2 h-8 font-display text-center rounded-md border border-gray-100 py-1 text-sm rounded-r-lg focus:outline-none hover:bg-[#1ca6af] hover:text-[#1cb6] capitalize cursor-pointer transition bg-white">
                                        Mujer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex-col flex gap-2 relative">
                            <div className=" relative w-full">
                                <label htmlFor="" className="font-display text-sm text-[#1ca6af] w-full capitalize">Edad</label>
                                <div className="flex h-8 items-center justify-center relative">
                                    <div  className="font-display text-center w-1/2 h-8 border rounded-md border-gray-100 py-1 text-sm rounded-l-lg focus:outline-none hover:bg-secondary hover:text-[#1cb6] capitalize cursor-pointer transition bg-secondary text-[#1ca6af]">
                                        Adulto
                                    </div>
                                    <div className="w-1/2 h-8 font-display text-center rounded-md border border-gray-100 py-1 text-sm rounded-r-lg focus:outline-none hover:bg-[#1ca6af] hover:text-[#1cb6] capitalize cursor-pointer transition bg-white">
                                        Nino
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className=" w-full h-max relative">
                            <label htmlFor="" className=" font-display text-[#1ca6af] text-sm w-full">
                            Correo electronico
                            </label>    
                            <div className=" w-full relative flex items-center">
                                <input type="text" className="jsx-d228716525057fa1 false font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-8 flex flex-col relative text-sm mb-7">
                        <div className=" relative* w-full h-full col-spanundefined content-between">
                            <label htmlFor="" className=" font-display text-sm text-[#1ca6af] w-full">Rol</label>
                            <div className=" relative">
                                <select name="" id="" className=" font-display capitalize cursor-pointer text-sm text-gray-500 border border-gray-300 focus:border-gray-400 focus:ring-0 transition w-full py-2 pr-7 rounded-xl focus:outline-none">
                                    <option className="ml-5" value="">Seleccionar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex gap-6 mt-5">
                        <div className="w-1/2">
                            <div className=" relative* w-full h-full col-spanundefined content-between">
                                <label className=" font-display text-sm text-[#1ca6af] w-full">
                                    Menu
                                </label>
                                <div className="relative">
                                    <select name="" id="" className="jsx-7a5250fa311129ee font-display capitalize cursor-pointer text-sm text-gray-500 border border-gray-300 focus:border-gray-400 focus:ring-0 transition w-full py-2 pr-7 rounded-xl focus:outline-none">
                                        <option value="">Adulto</option>
                                        <option value="">Nino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className=" w-full h-max relative">
                                <label htmlFor="" className=" font-display text-[#1ca6af] text-sm w-full">
                                    No. Acompanantes
                                </label>
                                <div className=" w-full relative flex items-center">
                                    <input type="number"  className="jsx-d228716525057fa1 false font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="font-display rounded-full py-2 px-6 text-white font-medium transition w-full hover:opacity-70  bg-[#1ca6af]">
                        Crear invitado
                    </button>
                </div>
            </form>
        </Modal>
        <Modal isOpen={isModalOpen2} onClose={closeModal2}>
            <form className="w-full">
                <div className='border-l-2 border-gray-100 pl-3 w-full '>
                    <h2 className='font-display text-3xl capitalize text-[#1ca6af] font-light'>
                        Crear 
                    </h2>
                    <h2 className='font-display text-5xl text-gray-500 font-medium'>
                        Grupo de invitados
                    </h2>
                </div>
                <div className="flex flex-col gap-5 py-6 w-full">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center box-content">
                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="" className="w-12 h-12 rounded-full mr-6 " />
                            <div className="jsx-d228716525057fa1 w-full h-max relative">
                                <label htmlFor="" className=" font-display text-[#1ca6af] text-sm w-full">
                                    Nombre de grupo invitados
                                </label>
                                <div className="jsx-d228716525057fa1 w-full relative flex items-center">
                                    <input type="text" className="jsx-d228716525057fa1 false font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="font-display rounded-full mt-4 py-2 px-6 text-white font-medium transition w-full hover:opacity-70 bg-[#1ca6af]">Crear grupo</button>
                </div>
            </form>
        </Modal>
        <Modal isOpen={isModalOpen3} onClose={closeModal3}>
            <form className="w-full">
                <div className='border-l-2 border-gray-100 pl-3 w-full '>
                    <h2 className='font-display text-3xl capitalize text-[#1ca6af] font-light'>
                        Crear 
                    </h2>
                    <h2 className='font-display text-5xl text-gray-500 font-medium'>
                        Menu
                    </h2>
                </div>
                <div className="flex flex-col gap-5 py-6 w-full">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center box-content">
                            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="" className="w-12 h-12 rounded-full mr-6 " />
                            <div className="jsx-d228716525057fa1 w-full h-max relative">
                                <label htmlFor="" className=" font-display text-[#1ca6af] text-sm w-full">
                                    Nombre de menu
                                </label>
                                <div className="jsx-d228716525057fa1 w-full relative flex items-center">
                                    <input type="text" className="jsx-d228716525057fa1 false font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="font-display rounded-full mt-4 py-2 px-4 text-white font-medium transition w-full hover:opacity-70 bg-[#1ca6af]">
                        Crear Menu
                    </button>
                </div>
                <div className="h-[240px] overflow-auto">
                <div className="flex flex-cols items-center font-display justify-between w-full capitalize hover:bg-base transition py-2 px-5">
                    <div className="flex items-center">
                        <ImSpoonKnife className="text-gray-500 w-4 h-4"/>
                        <span className="ml-2">
                        adultos
                        </span>
                    </div>
                    <div className="cursor-pointer">
                        <FaTrash className="text-gray-500 w-4 h-4"/>
                    </div>
                </div>
            </div>
            </form>
            
        </Modal>
    </> );
}
 
export default Guest;