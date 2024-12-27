import { MdEmail, MdOutlineEmail } from "react-icons/md";
import MinHeader from "../components/MinHeader";
import NavbarApp from "../components/Navbar/NavbarApp";
import { IoIosArrowDown } from "react-icons/io";
import { FaCamera, FaPencilAlt, FaPenFancy, FaSms } from "react-icons/fa";
import { FaRegLightbulb, FaSquareWhatsapp } from "react-icons/fa6";
import TableInvitations from "../components/TableInvitations";

const Invitations = () => {
    return ( <>
        <div className="w-[100vw] h-[100vh]">
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
                                            <MdOutlineEmail className="text-[#f7628c] w-6 h-6 md:w-10 md:h-10"/ >
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
                                <button className="text-[#f7628c] flex items-center text-[20px] first-letter:capitalize ml-3 ">
                                    Configuracion de la invitacion
                                    <IoIosArrowDown className="text-[#f7628c] w-6 h-6" />
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
                                            <div className="w-full flex items-center justify-between bg-[#f7628c] md:h-20 mt-3 rounded-t-md md:rounded-xl px-3 pt-1 pb-1 translate-y-10 md:translate-y-0">
                                                <button className="bg-white text-[#f7628c] text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase">
                                                    <MdEmail className="h-6 w-6"/>
                                                    email
                                                </button>
                                                <button className="bg-white text-[#f7628c] text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase">
                                                    <FaSquareWhatsapp className="h-6 w-6"/>
                                                    email
                                                </button>
                                                <button className="bg-white text-[#f7628c] text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase">
                                                    <FaSms className="h-6 w-6"/>
                                                    email
                                                </button>
                                                <button className="bg-white text-[#f7628c] text-xs md:text-sm flex flex-col items-center justify-center w-[25%] md:mx-4 py-1 md:py-3 px-2 rounded-lg md:rounded-xl capitalize md:uppercase">
                                                    <FaPenFancy className="h-6 w-6"/>
                                                    email
                                                </button>
                                            </div>
                                            <div className="col-span-3 pt-4 md:p-6 w-full">
                                                <div className="shadow-md rounded-2xl w-full mx-auto inset-x-0 md:h-60 py-8 md:p-4 font-display flex flex-col gap-2">
                                                    <form action="" className="md:w-1/2 flex flex-col gap-2 mx-auto">
                                                        <h3 className="font-normal text-gray-500 first-letter:uppercase"> 
                                                            Email de prueba
                                                        </h3>
                                                        <div className=" w-full h-max relative">
                                                            <label htmlFor="" className=" font-display text-[#f7628c] text-sm w-full">
                                                                Correo electronico
                                                            </label>
                                                            <div className=" w-full relative flex items-center">
                                                                    <input type="text" className="jsx-d228716525057fa1 false font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined" />
                                                            </div>
                                                        </div>
                                                        <div className="group flex relative ">
                                                            <button className="focus:outline-none hover:opacity-70 transition bg-[#f7628c] text-white rounded-xl text-sm px-5 py-2 mt-4 w-full">
                                                                Enviar email de prueba
                                                            </button>
                                                            <div className="group-hover:opacity-100 w-max gap-2 flex items-center font-display transition-opacity bg-emerald-600 px-10 py-1 text-sm text-gray-100 rounded-3xl absolute left-1/2 -translate-x-1/2 translate-y-[70px] opacity-0 m-4 mx-auto">
                                                                <FaRegLightbulb className="w-6 h-6"/>
                                                                <span>
                                                                Primero debes añadir la imagen de la invitación
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:pt-14 pt-3">
                                    <div className=" my-4">
                                        <div className=" w-96 mx-auto inset-x-0 flex my-2 mt-4 rounded-2xl overflow-hidden border">
                                            <button className="w-full md:w-[270px] py-1 bg-[#f7628c] text-white h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90">
                                                    Pendientes
                                            </button>
                                            <button className="w-full md:w-[270px] py-1 bg-white text-[#f7628c] h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90">
                                                    Enviadas
                                            </button>
                                        </div>
                                        <div className=" bg-white w-full rounded-xl shadow-md relative mt-4 mb-8">
                                            <div className="bg-white w-full shadow-lg rounded-xl ">
                                                <h2 className="font-display font-medium text-gray-500 text-2xl text-left py-4 pl-4">
                                                    Invitaciones pendientes
                                                </h2>
                                            </div>
                                            <div className=" w-full overflow-auto">
                                                <div className=" w-[200%] md:w-full">
                                                    <div>
                                                        <div className="relative">
                                                            <div className=" flex justify-between py-3 ml-[52px] w-auto pr-5 relative">
                                                                <button className="focus:outline-none bg-gray-300 text-white py-1 px-2 rounded-lg text-center text-[10px] md:text-sm capitalize">
                                                                    Enviar
                                                                </button>
                                                            </div>
                                                            <TableInvitations/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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