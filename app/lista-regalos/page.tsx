import { MdShare } from "react-icons/md";
import NavbarApp from "../components/Navbar/NavbarApp";
import MinHeader from "../components/MinHeader";
import { FaCoins, FaPiggyBank } from "react-icons/fa6";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaList, FaMoneyBill } from "react-icons/fa";

const GiftList = () => {
    return ( <>
        <div className="w-[100vw] h-[100vh]">
            <div className="md:block relative">
                <NavbarApp/>
            </div>
            <div className="w-[100%] bg-[#f2f2f2] overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
                <main className="w-full h-full">
                    <section className="w-full bg-base pt-2 md:py-0">
                        <div className="max-w-screen-lg mx-auto inset-x-0 flex-col gap-6 flex pb-28 md:pb-10 px-2 md:px-0">
                            <MinHeader category="Cumpleanos" name="Rumba llanera"/>
                            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 ">
                                <div className="w-full md:w-1/2 bg-white shadow-lg flex gap-8 items-center justify-center p-6 rounded-xl">
                                    <FaCoins className="w-12 h-12 text-gray-500"/>
                                    <div className="font-display flex flex-col items-center">
                                        <h3 className="text-lg text-[#f7628c] font-medium">
                                            Valor total
                                        </h3>
                                        <p className="text-2xl text-gray-500 font-semibold">
                                            00.0
                                        </p>
                                    </div>
                                    <div className="font-display flex flex-col justify-center text-sm text-gray-500">
                                        <p>
                                        Conseguido: 0.00 Є
                                        </p>
                                        <p>
                                        Contribuciones: 0.00 Є
                                        </p>
                                        <p>
                                        Pendiente: 0.00 Є
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 bg-white shadow-lg flex gap-4 items-center justify-center p-6 rounded-xl">
                                    <FaPiggyBank className="w-12 h-12 text-gray-500"/>
                                    <div className="font-display flex flex-col items-start">
                                        <h3 className="text-lg text-[#f7628c] font-medium">
                                            Saldo transferible
                                        </h3>
                                        <p className="text-2xl text-gray-500 font-semibold">
                                        0.00 Є
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-white shadow-lg flex gap-4 items-center justify-center p-6 rounded-xl">
                                <AiFillAmazonCircle className="w-28 h-28 text-[#f7628c]" />
                                <div className="font-display flex flex-col items-start">
                                    <h3 className="text-lg text-gray-400 font-medium leading-5">
                                    Construye vuestra lista de regalos
                                    <br />
                                    <span className="text-sm">
                                    con millones de opciones para elegir.
                                    </span>
                                    </h3>
                                    <div className="cursor-pointer flex flex-col md:flex-row gap-4">
                                        <a href="" className="button-secondary uppercase mt-2 text-sm">Crea tu lista de regalos en amazon</a>
                                    </div>                                    
                                </div>
                            </div>
                            <h3 className="font-display text-xl text-gray-500 w-max inset-x-0 mx-auto pt-2 pb-2">
                            ¿Como funciona la lista?
                            </h3>
                            <div className="w-full grid-cols-1 md:grid-cols-3 grid gap-6 cursor-pointer">
                                <a href="" className="bg-green-300 rounded-xl shadow-lg col-span-1 flex justify-center flex-col items-center font-display h-max p-6 gap-4 hover:scale-105 transition duration-200 transform ">
                                <FaList className="w-12 h-12 text-white"/>
                                <h3 className="text-lg font-semibold text-[#f7628c] text-center leading-4 flex flex-col gap-2 ">
                                    Crea tu lista
                                    <br />
                                    <span className="font-semibold text-sm leading-4">
                                    y elige tus regalos <br /> favoritos
                                    </span>
                                </h3>
                                </a>
                                <button className="bg-[#f7628c] rounded-xl shadow-lg col-span-1 flex justify-center flex-col items-center font-display h-max p-6 gap-4 hover:scale-105 transition duration-200 transform ">
                                    <MdShare className="text-white w-10 h-10"/>
                                    <h3 className="text-lg font-semibold text-white text-center leading-4 flex flex-col gap-2 ">
                                    Compartela
                                    <span className="font-normal text-sm leading-4">
                                    con tus invitados para <br /> que puedan participar
                                    </span>
                                    </h3>
                                </button>
                                <div className="bg-[#fbff4e] rounded-xl shadow-lg col-span-1 flex justify-center flex-col items-center font-display h-max p-6 gap-4 hover:scale-105 transition duration-200 transform ">
                                    <FaMoneyBill className="w-20 h-12 text-gray-400"/>
                                    <h3 className="text-lg font-semibold text-gray-300 text-center leading-4 flex flex-col gap-2 ">
                                    Transfiere el dinero
                                    <span className="font-normal text-sm leading-4">
                                    con tus invitados para que <br /> puedan participar
                                    </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </> );
}
 
export default GiftList;