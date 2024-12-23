"use client";
import { FaChevronRight, FaFacebook, FaHeart, FaInstagram, FaPhone, FaPlus, FaQuestion, FaStar } from "react-icons/fa";
import Header from "../components/Navbar/Header";
import { LuMessageCircle } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Faq from "../components/FAQ";
import Reviews from "../components/Reviews";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Footer from "../components/Footer";

const CategoryDetail = () => {

    return ( <>
        <div className="bg-[#f2f2f2] flex flex-col relative w-full h-[100vh]">
            <Header />
            <main className="w-full overflow-auto mt-20">
                <div className="mx-auto inset-x-0 flex flex-col gap-6 px-5 ">
                    <div className="lg:max-w-screen-lg mx-auto inset-x-0 flex items-center w-full text-sm text-gray-500 capitalize font-light py-4 w-full sm:flex">
                        <nav className="flex w-full">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <span className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer ">
                                        Inicio
                                    </span>
                                    </li>
                                <li>
                                    <div className="flex items-center">
                                        <FaChevronRight className=""/>
                                        <span className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-900 md:ml-2 cursor-pointer ">
                                            Novias-Venus
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="lg:max-w-screen-lg mx-auto w-full inset-x-0 flex items-center justify-between pt-10 md:pt-0">
                        <div className="flex items-center gap-2">
                            <img src="https://api.bodasdehoy.com/uploads/8589ec/novias-venus-logo-i640.webp" alt=""  className="object-cover w-24 h-24 rounded-full border-2 border-[#f7628c]"/>
                            <div className="flex flex-col items-start md:items-start justify-center gap-y-2 ">
                                <h1 className="md:text-4xl text-3xl text-[#49516f] pl-1">
                                    Titulo Producto
                                </h1>
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
                    <div className="md:bg-white w-full">
                        <div className="lg:max-w-screen-lg inset-x-0 mx-auto w-full grid md:grid-cols-3 gap-10 ">
                            <section className="w-full md:col-span-2">
                                <div className=" hidden md:block ">
                                    <div className="hidden md:block text-center">
                                        <div>
                                            <img src="https://api.bodasdehoy.com/uploads/cd5f3f/novias-venus-carrusel-2-i640.webp" alt="" className="w-full object-cover h-96 " />
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block bg-gray-200 w-full h-max -mt-4 rounded-lg relative z-10 bg-opacity-30">
                                    <div className="bg-white rounded-lg py-3 w-full border border-[#f7628c] flex items-center justify-between px-16">
                                        <div className="flex items-center text-gray-500 text-sm gap-2 hover:scale-105 transition transform cursor-pointer">
                                            <LuMessageCircle className="w-5 h-6"/>
                                            Opiniones
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm gap-2 hover:scale-105 transition transform cursor-pointer">
                                            <IoLocationOutline className="w-5 h-6"/>
                                            Como llegar
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm gap-2 hover:scale-105 transition transform cursor-pointer">
                                            <LuMessageCircle className="w-5 h-6"/>
                                            Preguntas
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-wrap gap-12 py-5 pb-0">
                                    <div className="max-h-full w-full">
                                        <div className="w-full text-[#49516f] overflow-hidden h-auto max-h-full">
                                            <span className="text-sm text-justify transition-all">
                                                <p>
                                                Si estás buscando la boutique de novias perfecta en Murcia, no busques más allá de Novias Venus. Esta tienda de novias ofrece una amplia variedad de servicios y accesorios para asegurarse de que tu gran día sea perfecto.
                                                </p>
                                                <br />
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ducimus assumenda iure necessitatibus delectus incidunt nihil suscipit inventore harum, praesentium aspernatur animi autem dolore, doloremque dolor dolorum. Cum, tempora quam.
                                                </p>
                                                <p>
                                                Si estás buscando la boutique de novias perfecta en Murcia, no busques más allá de Novias Venus. Esta tienda de novias ofrece una amplia variedad de servicios y accesorios para asegurarse de que tu gran día sea perfecto.
                                                </p>
                                                <br />
                                                <p>
                                                Si estás buscando la boutique de novias perfecta en Murcia, no busques más allá de Novias Venus. Esta tienda de novias ofrece una amplia variedad de servicios y accesorios para asegurarse de que tu gran día sea perfecto.
                                                </p>
                                                <br />
                                            </span>
                                        </div>
                                        <button className="text-[#f7628c] text-sm w-full justify-end flex gap-2 py-4 w-max float-right items-center ">
                                          <FaPlus/>  Ver más
                                        </button>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className="flex items-center gap-3 pb-6">
                                            <FaQuestion className="text-[#f7628c] w-20 h-14"/>
                                            <h2 className="text-gray-500 font-display text-xl">
                                                Preguntas Frecuentes
                                            </h2>
                                        </div>
                                        <div className="w-full flex flex-col gap-6">
                                            <Faq/>
                                            <Faq/>
                                            <Faq/>
                                            <Faq/>
                                        </div>
                                    </div>
                                    <Reviews/>
                                    <div className="flex items-center gap-3">
                                        <FaLocationDot className="w-10 h-10 text-[#f7628c]" />
                                        <h2 className="text-lg text-gray-500">
                                            Como llegar
                                        </h2>
                                    </div>
                                    <div className="w-full grid justify-items-center">
                                        <div className="rounded-xl overflow-hidden w-11/12">
                                            <div className="relative">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className=" md:block w-full ... relative ">
                                <div className="bg-white shadow md:-mt-12 rounded-xl p-4 relative">
                                    <div className="flex gap-4 items-center text-primary w-full justify-center flex-col">
                                        <div className="w-fullj border-b border-gray-200 pb-4">
                                            <div className="relative flex items-center p-3 border-b border-gray-200">
                                                <span className="relative w-max">
                                                    <img src="https://api.bodasdehoy.com/uploads/8589ec/novias-venus-logo-i640.webp" alt="" className="object-cover w-10 h-10 rounded-full border border-gray-200" />
                                                    <span className="absolute w-3 h-3 bg-gray-400  rounded-full -right-0 border border-white top-0">

                                                    </span>
                                                </span>
                                                <div className="flex ml-2 items-start flex-col justify-end">
                                                    <span className="block font-bold text-gray-600 capitalize">
                                                        Nombre de proveedor
                                                    </span>
                                                    <span className="text-xs text-gray-400">
                                                        Ultima conexion
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-between w-full py-3">
                                                <span className="flex items-center text-[#f7628c] text-sm gap-2 py-2 justify-start w-full">
                                                    <FaHeart className="w-5 h-5"/>
                                                    Para enviar un mensaje
                                                </span>
                                                <button className="flex flex-col items-center text-white bg-[#f7628c] w-full mt-2 text-sm p-2 flex justify-center rounded-lg hover:opacity-90 transition hover:text-gray-100 gap-1">
                                                    Debes iniciar sesion
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-10 text-xs justify-between w-full border-b border-gray-100 py-2 overflow-hidden relative">
                                            <div className="">
                                                <TbWorld className="w-5 h-5 text-[#f7628c] "/>
                                            </div>
                                            <div className="w-full flex items-center justify-end cursor-pointer">
                                                <p className="text-tertiary truncate">
                                                    Url del sition web
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-10 text-xs justify-between w-full border-b border-gray-100 py-2 overflow-hidden relative">
                                            <div className="">
                                                <FaPhone className="w-4 h-4 text-[#f7628c] "/>
                                            </div>
                                            <div className="w-full flex items-center justify-end cursor-pointer">
                                                <p className="text-tertiary truncate">
                                                    Telefono
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-10 text-xs justify-between w-full border-b border-gray-100 py-2 overflow-hidden relative">
                                            <div className="">
                                                <FaFacebook className="w-5 h-5 text-[#f7628c] "/>
                                            </div>
                                            <div className="w-full flex items-center justify-end cursor-pointer">
                                                <p className="text-tertiary truncate">
                                                    Url del sition web
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-10 text-xs justify-between w-full border-b border-gray-100 py-2 overflow-hidden relative">
                                            <div className="">
                                                <FaInstagram className="w-5 h-5 text-[#f7628c] "/>
                                            </div>
                                            <div className="w-full flex items-center justify-end cursor-pointer">
                                                <p className="text-tertiary truncate">
                                                    Url del sition web
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    </> );
}
 
export default CategoryDetail;