import { FaListUl, FaPlusCircle } from "react-icons/fa";
import MinHeader from "../components/MinHeader";
import NavbarApp from "../components/Navbar/NavbarApp";
import LiCost from "../components/LiCost";
import { FaCoins, FaPiggyBank } from "react-icons/fa6";

const Budget = () => {
    return ( <>
            <div className="w-[100vw] h-[100vh]">
                <div className="md:block relative">
                    <NavbarApp/>
                </div>
                <div className="w-[100%] bg-[#f2f2f2] overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
                    <main className="w-full h-full">
                        <section className="bg-[#f2f2f2] w-full pb-6 pt-2 md:py-0 h-full">
                            <div className="max-w-screen-lg mx-auto inset-x-0 px-2 md:px-0 w-full ">
                                <MinHeader name="Rumba llaneras" category="Cumpleanos"/>
                                <div className="md:w-96 mx-auto inset-x-0 flex my-2 mt-4 rounded-2xl overflow-hidden">
                                    <div className="w-[40%] md:w-[270px] py-1 bg-[#f7628c] text-white h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90 capitalize">
                                        <p>
                                            Presupuesto
                                        </p>
                                    </div>
                                    <div className="w-[25%] md:w-1/2 py-1 bg-white text-[#f7628c] h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90 border-x-2 capitalize">
                                        <p>
                                            Pago
                                        </p>
                                    </div>
                                    <div className=" w-[40%] md:w-[320px] py-1  bg-white text-[#f7628c] h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90">
                                        <p>
                                            Pagos programados
                                        </p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 w-full gap-6 pt-2 md:pr-0 pb-4">
                                    <div className=" bg-white w-full shadow-md rounded-xl h-max ">
                                        <button className=" focus:outline-none bg-[#f7628c] rounded-xl font-display font-light text-md flex gap-2 w-full py-1 items-center justify-center text-white hover:scale-105 transition transform">
                                            <FaPlusCircle className="w-4 h-4"/>
                                            Nueba categorias
                                        </button>
                                        <ul className=" w-full flex flex-col font-display text-sm h-44 overflow-y-auto md:h-max divide-y text-gray-400 cursor-not-allowed*">
                                            <LiCost/>
                                            <LiCost/>
                                            <LiCost/>
                                            <LiCost/>
                                            <LiCost/>
                                            <LiCost/>

                                        </ul>
                                    </div>
                                    <div className="md:col-span-2 w-full flex flex-col relative">
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div className=" bg-white shadow-md rounded-xl grid place-items-center p-4">
                                                <FaPiggyBank className="w-12 h-12 text-gray-500 "/>
                                                <p className="jsx-2ae18751a0032410 font-display text-gray-500 font-light text-md grid place-items-center">
                                                    Presupuesto estimado
                                                </p>
                                                <span className=" font-display text-gray-500 font-semibold text-lg text-center">
                                                11.00
                                                <select name="" id="" className=" border-none focus:ring-0 cursor-pointer">
                                                    <option value="">USD</option>
                                                    <option value="">EUR</option>
                                                    <option value="">COP</option>

                                                </select>
                                                </span>
                                                <button className=" border-[#f7628c] border font-display focus:outline-none text-[#f7628c] text-xs bg-white px-3 py-1 rounded-lg my-2 hover:bg-primary hover:text-white transition">
                                                    Modificar presupuesto
                                                </button>
                                            </div>
                                            <div className=" bg-white shadow-md rounded-xl grid place-items-center p-4">
                                                <FaCoins className="w-12 h-12 text-[#f7628c] "/>
                                                <p className="font-display text-gray-500 font-light text-md grid place-items-center">
                                                    Coste final <br /> <span className="font-semibold text-lg text-center">US$0.00</span>
                                                </p>
                                                <div className=" w-full rounded-xl overflow-hidden flex my-2">
                                                    <div className="w-1/2 bg-[#f7628c] py-1 px-3">
                                                        <p className="text-xs font-display text-white">
                                                            Pagado US$0.00
                                                        </p>
                                                    </div>
                                                    <div className="w-1/2 bg-[#fbff4e] py-1 px-3">
                                                        <p className="text-xs font-display text-[#f7628c]">
                                                            Por pagar US$0.00
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full pt-2">
                                            <h2 className="font-display pb-2 text-xl text-gray-500 font-semibold text-center w-full">
                                                Cuanto cuesta mi evento?
                                            </h2>
                                            <div className=" w-full h-full md:mb-2 md:h-max bg-white rounded-xl shadow-md flex justify-center  md:py-6 pt-6  ">
                                                <img src="https://placehold.co/600x400" alt="" />
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
 
export default Budget;