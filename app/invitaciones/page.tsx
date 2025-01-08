"use client";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import MinHeader from "../../components/App/MinHeader";
import NavbarApp from "../../components/Common/NavbarApp";
import { IoIosArrowDown } from "react-icons/io";
import { FaCamera, FaPencilAlt, FaPenFancy, FaSms } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import EmailInvitation from "../../components/Invitations/Emailnvitation";
import WhatsappInvitation from "../../components/Invitations/WhatsappInvitation";
import PhoneInput from "../../components/Invitations/PhoneWhats";
import SmsInvitation from "../../components/Invitations/SmsInvitation";
import DesignInvitation from "../../components/Invitations/DesignInvitation";
import InvitationsPending from "../../components/Invitations/InvitationsPending";
import InvitationsSend from "../../components/Invitations/InvitationsSend";
import NavbarDown from "@/components/Common/NavbarDown";

const Invitations = () => {

    const [activeTab, setActiveTab] = useState('email');
    
        const handleTabClick = (tab: string) => {
            setActiveTab(tab);
        };

    const [table, setTable] = useState('pendientes');

        const handleTableClick = (table: string) => {
            setTable(table)
        }

    return ( <>
        <div className="w-[100vw] h-[100vh]">
        <NavbarDown/>

            <div className="md:block relative">
                <NavbarApp />
            </div>
            <div className="w-[100%] bg-[#f2f2f2] overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
                <main className="w-full h-full">
                    <section className="bg-[#f2f2f2] w-full pb-6 pt-2 md:py-0">
                        <div className="max-w-screen-lg mx-auto inset-x-0 w-full px-2 md:px-0 gap-4 h-full ">
                            <MinHeader name="asd" category="cumpleanos" />
                            <div>
                                <div className="bg-white w-full h-[88px] md:h-[76px] shadow-lg rounded-xl my-1 md:my-3 flex py-6 items-center justify-center">
                                    <div className="w-1/2 flex justify-center">
                                        <div className="flex gap-2 items-start md:items-center justify-center px-1 leading-4 flex-col md:flex-row">
                                            <MdOutlineEmail className="text-green-300 w-6 h-6 md:w-10 md:h-10"/ >
                                            <div>
                                                <p className="font-display font-semibold md:text-2xl text-gray-600 flex gap-1">
                                                    0 de 0 
                                                </p>
                                                <span className="capitalize font-display font-medium text-xs md:text-sm">
                                                    Invitaciones enviadas
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex justify-center">
                                        <div className="flex gap-2 items-start md:items-center justify-center px-1 leading-4 flex-col md:flex-row">
                                            <MdOutlineEmail className="text-[#1ca6af] w-6 h-6 md:w-10 md:h-10"/ >
                                            <div>
                                                <p className="font-display font-semibold md:text-2xl text-gray-600 flex gap-1">
                                                    0 de 0 
                                                </p>
                                                <span className="capitalize font-display font-medium text-xs md:text-sm">
                                                    Invitaciones pendientes
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white min-h-full w-full shadow-lg rounded-xl h-full md:px-6 pt-2 md:pt-6 pb-28 mb-32 md:mb-0 md:p-12 relative">
                                <button className="text-[#1ca6af] flex items-center text-[20px] first-letter:capitalize ml-3 ">
                                    Configuracion de la invitacion
                                    <IoIosArrowDown className="text-[#1ca6af] w-6 h-6" />
                                </button>
                                <div>
                                    <div className="w-full flex flex-col md:flex-row mt-3">
                                        <div className="w-full md:w-1/3 flex px-14 md:px-10">
                                            <div className="relative w-full h-72 md:h-80">
                                                <div className="  w-full z-10 h-full background-image bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-xl shadow-lg flex flex-col text-white items-center justify-center  overflow-hidden">
                                                    <input type="file" className=" hidden" />
                                                    <label htmlFor="" className=" hover:scale-120 transform text-md flex flex-col items-center justify-center gap-1 cursor-pointer relative">
                                                        <FaCamera className="w-14 h-10"/>
                                                        Anadir invitacion
                                                    </label>
                                                    <div className=" w-full flex flex-col text-gray-500 bottom-0 translate-y-full absolute">
                                                        <label htmlFor="" className=" gap-1 flex items-center justify-center w-full bg-gray-200 px-3 py-1 cursor-pointer rounded-b-xl shadow-sm hover:z-10">
                                                            <div className=" flex hover:scale-105 transition transform">
                                                                Cambiar
                                                                <FaPencilAlt className="class"/>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3  md:h-80 mt-3 md:mt-0 transition-all delay-150  ">
                                            <div className="w-full flex items-center justify-between bg-[#1ca6af] md:h-20 mt-3 rounded-t-md md:rounded-xl px-3 pt-1 pb-1 translate-y-10 md:translate-y-0">
                                                <button onClick={() => handleTabClick('email')} className={`${activeTab === 'email' ? 'bg-white text-[#1ca6af]' : 'bg-[#1ca6af] text-white'} text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase`}>
                                                    <MdEmail className="h-6 w-6"/>
                                                    email
                                                </button>
                                                <button onClick={() => handleTabClick('whatsapp')} className={`${activeTab === 'whatsapp' ? 'bg-white text-[#1ca6af]' : 'bg-[#1ca6af] text-white'} text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase`}>
                                                    <FaSquareWhatsapp className="h-6 w-6"/>
                                                    Whatsapp
                                                </button>
                                                <button onClick={() => handleTabClick('sms')} className={`${activeTab === 'sms' ? 'bg-white text-[#1ca6af]' : 'bg-[#1ca6af] text-white'} text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase`}>
                                                    <FaSms className="h-6 w-6"/>
                                                    SMS
                                                </button>
                                                <button onClick={() => handleTabClick('design')}  className={`${activeTab === 'design' ? 'bg-white text-[#1ca6af]' : 'bg-[#1ca6af] text-white'} text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase`}>
                                                    <FaPenFancy className="h-6 w-6"/>
                                                    Diseno
                                                </button>
                                            </div>
                                           {activeTab === 'email' && (
                                            <EmailInvitation/>
                                        
                                           )}
                                           {activeTab === 'whatsapp' && (
                                            <WhatsappInvitation/>
                                        
                                           )}
                                           {activeTab === 'sms' && (
                                            <SmsInvitation/>
                                        
                                           )}
                                           {activeTab === 'design' && (
                                            <DesignInvitation/>
                                        
                                           )}
                                        </div>
                                    </div>
                                </div>
                                {activeTab === 'whatsapp' && (
                                            <PhoneInput imageUrl="https://organizador.bodasdehoy.com/TextoPlantilla.png"/>
                                        
                                )}
                                {activeTab === 'sms' && (
                                            <PhoneInput imageUrl="https://organizador.bodasdehoy.com/SMSPlantilla.png"/>
                                        
                                )}
                                <div className="md:pt-14 pt-3">
                                    <div className=" my-4">
                                        <div className=" w-96 mx-auto inset-x-0 flex my-2 mt-4 rounded-2xl overflow-hidden border">
                                            <button onClick={() => handleTableClick('pending')} className={`w-full md:w-[270px] py-1 ${table === 'pending' ? 'bg-[#1ca6af] text-white' : 'bg-white text-[#1ca6af]'} h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90`}>
                                                    Pendientes
                                            </button>
                                            <button onClick={() => handleTableClick('sending')} className={`w-full md:w-[270px] py-1 ${table === 'sending' ? 'bg-[#1ca6af] text-white' : 'bg-white text-[#1ca6af]'} h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90`}>
                                                    Enviadas
                                            </button>
                                        </div>
                                        {table === 'pending' && (
                                            <InvitationsPending/>
                                        )}
                                        {table === 'sending' && (
                                            <InvitationsSend/>
                                        )}
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
 
export default Invitations;