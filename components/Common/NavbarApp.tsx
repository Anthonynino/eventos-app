"use client";


import { FaBell, FaCalendar, FaGift  } from "react-icons/fa";
import { FaChevronDown, FaListCheck,FaBriefcase, FaRegBell, FaClipboardList, FaSun } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";
import { IoLogInOutline,IoDocumentTextOutline, IoHeartCircleSharp, IoBalloon  } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { HiUsers } from "react-icons/hi2";
import { ImCalculator } from "react-icons/im";
import { MdEmail } from "react-icons/md";


const NavbarApp = () => {

    const [active, setActive] = useState(false)

    const handleActive = () =>{
        setActive(!active)
    }

    return ( <div>
        <div className="w-full flex justify-center relative">
            <header className="f-top relative w-full bg-white">
                <div className="max-w-screen-lg h-16 px-5 lg:px-0 w-full flex justify-between items-center mx-auto inset-x-0 ">
                    <span className="cursor-pointer items-center flex justify-center w-[130px] md:w-[208px] h-[60px] md:h-[64px] translate-x-[-14px] md:translate-x-[-160px]">
                        <svg width="300" height="39" viewBox="0 0 300 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:opacity-80 transition text-[#1ca6af] w-full h-full object-contain">
                            <g clipPath="url(#clip0)">
                                <path d="M25.86 22.2C25.86 27.07 22 29.89 14.58 29.89H0V1.69H13.78C20.78 1.69 24.45 4.63 24.45 9.02C24.477 10.3027 24.14 11.5668 23.4781 12.6659C22.8162 13.7649 21.8564 14.654 20.71 15.23C22.2264 15.6447 23.5591 16.5578 24.4933 17.8222C25.4275 19.0866 25.909 20.6287 25.86 22.2V22.2ZM6.49 6.61V13.25H13C16.18 13.25 17.92 12.12 17.92 9.91C17.92 7.7 16.15 6.61 13 6.61H6.49ZM19.3 21.51C19.3 19.13 17.48 18.01 14.1 18.01H6.49V25.01H14.1C17.48 25 19.3 23.93 19.3 21.51Z" fill="currentColor">
                                </path>
                                <path d="M78.82 0V29.89H72.82V27.39C71.9825 28.3466 70.9366 29.0983 69.7629 29.5872C68.5892 30.0761 67.319 30.2892 66.05 30.21C59.93 30.21 55.22 25.86 55.22 19.05C55.22 12.24 59.93 7.9 66.05 7.9C67.2563 7.83849 68.4616 8.04006 69.5822 8.49074C70.7029 8.94142 71.7121 9.63043 72.54 10.51V0H78.82ZM72.66 19.05C72.66 15.31 70.24 13.05 67.14 13.05C64.04 13.05 61.58 15.31 61.58 19.05C61.58 22.79 64 25.05 67.14 25.05C70.28 25.05 72.66 22.8 72.66 19.05Z" fill="currentColor">
                                </path>
                                <path d="M102.38 17.52V29.89H96.5V27.19C95.33 29.19 93.07 30.19 89.89 30.19C84.81 30.19 81.79 27.37 81.79 23.63C81.79 19.89 84.49 17.14 91.1 17.14H96.1C96.1 14.44 94.49 12.87 91.1 12.87C88.8566 12.8525 86.6665 13.5534 84.85 14.87L82.6 10.51C85.3859 8.73362 88.6368 7.82517 91.94 7.9C98.55 7.9 102.38 11 102.38 17.52ZM96.09 23V20.83H91.78C88.84 20.83 87.92 21.91 87.92 23.36C87.92 24.81 89.25 26 91.46 26C92.452 26.0661 93.4389 25.8097 94.2733 25.269C95.1077 24.7284 95.7449 23.9325 96.09 23V23Z" fill="currentColor">
                                </path>
                                <path d="M105.11 27.88L107.2 23.36C109.48 24.7212 112.084 25.4464 114.74 25.46C117.64 25.46 118.74 24.69 118.74 23.46C118.74 19.91 105.65 23.54 105.65 14.87C105.65 10.77 109.36 7.86999 115.65 7.86999C118.548 7.82058 121.414 8.47967 124 9.78999L121.91 14.26C120.004 13.1833 117.849 12.6279 115.66 12.65C112.84 12.65 111.66 13.54 111.66 14.65C111.66 18.36 124.76 14.77 124.76 23.31C124.76 27.31 121.01 30.2 114.52 30.2C111.233 30.2728 107.986 29.4722 105.11 27.88V27.88Z" fill="currentColor">
                                </path>
                                <path d="M151.93 0V29.89H145.93V27.39C145.092 28.3455 144.045 29.0963 142.872 29.5851C141.699 30.0739 140.429 30.2877 139.16 30.21C133.03 30.21 128.32 25.86 128.32 19.05C128.32 12.24 133 7.9 139.16 7.9C140.365 7.83861 141.569 8.04028 142.688 8.491C143.807 8.94172 144.814 9.63067 145.64 10.51V0H151.93ZM145.76 19.05C145.76 15.31 143.35 13.05 140.25 13.05C137.15 13.05 134.69 15.31 134.69 19.05C134.69 22.79 137.1 25.05 140.25 25.05C143.4 25.05 145.76 22.8 145.76 19.05V19.05Z" fill="currentColor">
                                </path>
                                <path d="M176.43 20.83H160C160.6 23.53 162.9 25.18 166.2 25.18C167.202 25.2196 168.202 25.0537 169.137 24.6926C170.073 24.3314 170.924 23.7826 171.64 23.08L175 26.71C173 29 170 30.21 166.06 30.21C158.57 30.21 153.7 25.5 153.7 19.05C153.7 12.6 158.66 7.89999 165.27 7.89999C171.63 7.89999 176.55 12.17 176.55 19.13C176.55 19.62 176.47 20.3 176.43 20.83ZM160 17.16H170.67C170.458 15.8985 169.805 14.7531 168.829 13.927C167.852 13.101 166.614 12.6477 165.335 12.6477C164.056 12.6477 162.818 13.101 161.841 13.927C160.865 14.7531 160.212 15.8985 160 17.16V17.16Z" fill="currentColor">
                                </path>
                                <path d="M202.65 17.48V29.89H196.37V18.45C196.37 14.95 194.76 13.33 191.98 13.33C188.98 13.33 186.78 15.19 186.78 19.17V29.89H180.5V0H186.78V10.47C187.701 9.60663 188.784 8.93485 189.967 8.49366C191.15 8.05248 192.409 7.85068 193.67 7.9C198.79 7.9 202.65 10.88 202.65 17.48Z" fill="currentColor">
                                </path>
                                <path d="M204.44 19.05C204.44 12.53 209.44 7.89999 216.36 7.89999C223.28 7.89999 228.25 12.53 228.25 19.05C228.25 25.57 223.25 30.21 216.36 30.21C209.47 30.21 204.44 25.58 204.44 19.05ZM221.88 19.05C221.88 15.31 219.5 13.05 216.36 13.05C213.22 13.05 210.8 15.31 210.8 19.05C210.8 22.79 213.22 25.05 216.36 25.05C219.5 25.05 221.88 22.8 221.88 19.05Z" fill="currentColor">
                                </path>
                                <path d="M251.18 8.22L241.39 31.22C239.29 36.46 236.31 38.03 232.39 38.03C230.222 38.0578 228.108 37.3531 226.39 36.03L228.69 31.56C229.655 32.4367 230.897 32.9464 232.2 33C233.94 33 234.9 32.24 235.75 30.3L235.83 30.1L226.44 8.22H232.93L239 22.92L245.12 8.22H251.18Z" fill="currentColor">
                                </path>
                                <path d="M35.73 6.08001C38.8139 4.87963 42.2426 4.91926 45.2979 6.19059C48.3532 7.46192 50.798 9.8663 52.12 12.9C52.8121 14.4263 53.1826 16.0787 53.2084 17.7544C53.2342 19.4301 52.9148 21.0931 52.27 22.64C51.6535 24.2292 50.7231 25.678 49.5344 26.8997C48.3457 28.1215 46.9231 29.0912 45.3514 29.7511C43.7797 30.4109 42.0911 30.7474 40.3865 30.7403C38.6819 30.7333 36.9962 30.3829 35.43 29.71C33.9194 29.1092 32.5456 28.2097 31.3909 27.0653C30.2362 25.9209 29.3243 24.5552 28.71 23.05C28.0323 21.4778 27.6767 19.7857 27.664 18.0738C27.6514 16.3618 27.9821 14.6646 28.6365 13.0826C29.291 11.5006 30.2559 10.0658 31.4742 8.86308C32.6926 7.66032 34.1397 6.71399 35.73 6.08001V6.08001ZM39.1 14.54C38.71 14.28 38.37 14.01 38 13.8C37.2 13.3985 36.2764 13.3198 35.42 13.58C34.5647 13.7584 33.7998 14.2329 33.26 14.92C32.7779 15.6543 32.526 16.5158 32.5367 17.3942C32.5474 18.2725 32.8202 19.1277 33.32 19.85C34.1613 20.9891 35.2708 21.9028 36.55 22.51C38.4425 23.4328 40.4665 24.0568 42.55 24.36C42.6698 24.3937 42.7972 24.3886 42.914 24.3455C43.0307 24.3024 43.1308 24.2235 43.2 24.12C44.6915 22.3072 45.8311 20.2315 46.56 18C47.1242 16.4651 47.0957 14.775 46.48 13.26C46.1517 12.4418 45.5526 11.761 44.7827 11.3314C44.0127 10.9019 43.1187 10.7496 42.25 10.9C41.2507 11.1141 40.3606 11.6779 39.74 12.49C39.3108 13.0862 39.0863 13.8055 39.1 14.54V14.54Z" fill="currentColor">
                                </path>
                                <path d="M251.577 29.298C252.644 29.298 253.493 28.4883 253.493 27.3625C253.493 26.217 252.644 25.4665 251.577 25.4665C250.511 25.4665 249.661 26.217 249.661 27.3625C249.661 28.4883 250.511 29.298 251.577 29.298ZM260.581 29.298C262.813 29.298 264.57 28.3105 265.341 26.612L262.951 25.3085C262.378 26.3355 261.529 26.77 260.561 26.77C259.001 26.77 257.776 25.6838 257.776 23.8273C257.776 21.9708 259.001 20.8845 260.561 20.8845C261.529 20.8845 262.378 21.3388 262.951 22.346L265.341 21.0623C264.57 19.3243 262.813 18.3565 260.581 18.3565C257.125 18.3565 254.656 20.6278 254.656 23.8273C254.656 27.0268 257.125 29.298 260.581 29.298ZM272.036 29.298C275.413 29.298 277.862 27.0268 277.862 23.8273C277.862 20.6278 275.413 18.3565 272.036 18.3565C268.658 18.3565 266.19 20.6278 266.19 23.8273C266.19 27.0268 268.658 29.298 272.036 29.298ZM272.036 26.77C270.495 26.77 269.31 25.664 269.31 23.8273C269.31 21.9905 270.495 20.8845 272.036 20.8845C273.576 20.8845 274.741 21.9905 274.741 23.8273C274.741 25.664 273.576 26.77 272.036 26.77ZM293.529 18.3565C291.929 18.3565 290.547 19.0083 289.698 20.0945C288.947 18.9293 287.683 18.3565 286.202 18.3565C284.839 18.3565 283.654 18.8305 282.864 19.739V18.5145H279.921V29.14H283.002V23.8075C283.002 21.9115 283.97 21.0228 285.333 21.0228C286.617 21.0228 287.347 21.8128 287.347 23.531V29.14H290.428V23.8075C290.428 21.9115 291.396 21.0228 292.779 21.0228C294.023 21.0228 294.793 21.8128 294.793 23.531V29.14H297.874V23.057C297.874 19.818 296.057 18.3565 293.529 18.3565Z" fill="currentColor">
                                </path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="299.21" height="38.03" fill="white">
                                    </rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <nav className="hidden lg:block">
                        <ul className="flex md:gap-3 lg:gap-4 xl:gap-4 text-sm text-gray-200">
                            <li className="font-light uppercase flex items-center justify-center cursor-pointer relative transition text-gray-500 hover:text-primary">
                                Novia
                            </li>
                            <li className="font-light uppercase flex items-center justify-center cursor-pointer relative transition text-gray-500 hover:text-primary">
                                Novio
                            </li>
                            <li className="font-light uppercase flex items-center justify-center cursor-pointer relative transition text-gray-500 hover:text-primary">
                                Proveedores
                            </li>
                            <li className="font-light uppercase flex items-center justify-center cursor-pointer relative transition text-gray-500 hover:text-primary">
                                Lugares para bodas
                            </li>
                        </ul>
                    </nav>
                    <div className="*">
                        <div className="text-gray-100 flex space-x-4 relative">
                            <span className="flex items-center gap-2 relative">
                            </span>
                            <div className="items-center flex relative cursor-default ">
                                <div className="opacity-40 bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-200* cursor-pointer">
                                    <FaListCheck className="text-[#1ca6af] w-6 h-6 scale-x-90"/>
                                </div>
                            </div>
                            <div className="bg-white items-center flex relative cursor-default">
                                <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-200 cursor-pointer">
                                    <FaBell className="text-[#1ca6af] w-6 h-6 scale-x-90"/>
                                </div>
                            </div>
                            <div className="bg-white items-center gap-2 flex relative">
                                {
                                    active && <div className="bg-white rounded-lg w-80 h-max shadow-lg shadow-gray-400 absolute top-0 md:right-0 translate-y-[46px] -translate-x-[250px] md:-translate-x-[0px] overflow-hidden z-40 title-display">
                                    <div className="w-full border-b border-gray-100 pb-2">
                                        <p className="text-gray-500 font-extralight uppercase tracking-wider text-xs text-center cursor-default">
                                            <h3 className="text-primary font-medium w-full text-center cursor-default ">
                                                guest
                                            </h3>
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-2 text-xs place-items-left p-2 ">
                                        <li className="flex text-gray-700 gap-2 hover:bg-color-base transition cursor-pointer rounded-lg py-1 px-2 items-center justify-start">
                                            <IoLogInOutline className="w-5 h-5" />
                                            Iniciar sesion
                                        </li>
                                        <li className="flex text-gray-700 gap-2 hover:bg-color-base transition cursor-pointer rounded-lg py-1 px-2 items-center justify-start">
                                            <LuUserPlus className="w-5 h-5" />
                                            Registrarse
                                        </li>
                                        <li className="flex text-gray-700 gap-2 hover:bg-color-base transition cursor-pointer rounded-lg py-1 px-2 items-center justify-start">
                                            <FaBriefcase className="w-5 h-5" />
                                            Empresas
                                        </li>
                                        <li className="flex text-gray-700 gap-2 hover:bg-color-base transition cursor-pointer rounded-lg py-1 px-2 items-center justify-start">
                                            <FaRegBell className="w-5 h-5" />
                                            Notificaciones
                                        </li>
                                        <li className="flex text-gray-700 gap-2 hover:bg-color-base transition cursor-pointer rounded-lg py-1 px-2 items-center justify-start">
                                            <IoDocumentTextOutline className="w-5 h-5" />
                                            Mis publicaciones
                                        </li>
                                        <li className="flex text-gray-700 gap-2 hover:bg-color-base transition cursor-pointer rounded-lg py-1 px-2 items-center justify-start">
                                            <IoHeartCircleSharp className="w-5 h-5" />
                                            Mis proveedores
                                        </li>
                                        <div className="col-span-2 flex text-white gap-2 bg-[#1ca6af] hover:bg-slate-400 transition cursor-pointer rounded-lg py-1 px-2 items-center justify-center ">
                                                Obten acceso completo
                                        </div>
                                    </ul>
                                </div>
                                }
                                <img src="https://organizador.bodasdehoy.com/placeholder/user.png" alt="" className="object-cover w-10 h-10 rounded-full" />
                                <FaChevronDown className="w-5 h-5 transform cursor-pointer text-gray-600" onClick={handleActive} />
                                <p className="font-display text-sm text-gray-500 capitalize">
                                </p>
                            </div>
                            <div className=" flex items-center cursor-pointer ">
                                <div className="space-x-1 flex items-center justify-center text-sm -ml-4">
                                    <img src="https://organizador.bodasdehoy.com/flags-svg/es.svg" alt="" className="border-[1px] border-gray-500" width={22} />
                                    <span className="text-gray-600">
                                        ES
                                    </span>
                                </div>
                                <FaChevronDown className="text-gray-500"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1ca6af] py-2 w- border-t border-b border-gray-300 hidden md:block">
                    <div className="max-w-screen-lg mx-auto flex justify-center items-center px-5 lg:px-0">
                        <ul className="flex gap-5 text-lg text-white">
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                                <IoBalloon className="w-6 h-6" />
                                <Link href="/organizador-app">
                                <span className="text-sm">Mis eventos</span>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                            <FaClipboardList className="w-6 h-6" />
                                <Link href="/resumen-evento">
                                <span className="text-sm">Resumen</span>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                                <HiUsers className="w-6 h-6" />
                                <Link href="invitados">
                                <span className="text-sm">Invitados</span>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                                <FaSun className="w-6 h-6" />
                                <span className="text-sm">Mesas</span>
                            </li>
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                                <FaGift className="w-6 h-6" />
                                <Link href="/lista-regalos">
                                <span className="text-sm">Lista de regalos</span>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                                <ImCalculator className="w-6 h-6" />
                                <Link href="/presupuesto">
                                
                                <span className="text-sm">Presupuesto</span>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                                <MdEmail className="w-6 h-6" />
                                <Link href="/invitaciones">
                                <span className="text-sm">Invitaciones </span>
                                </Link>
                            </li>
                            <li className="flex flex-col items-center cursor-pointer hover:text-primary transition">
                                <FaCalendar className="w-6 h-6" />
                                <span className="text-sm">Itinerario</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    </div> );
}
 
export default NavbarApp;