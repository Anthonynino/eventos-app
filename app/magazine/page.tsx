import ArticleMagazine from "../../components/Magazine/ArticleMagazine";
import CardSliderMazine from "../../components/Cards/CardMagazineSlider";
import CardNotice from "../../components/Cards/CardNotice";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import Newsletter from "../../components/Common/Newsletter";

const MagazinePage = () => {
    return ( 
        <div className="bg-[#f2f2f2]">
            <Header />
            <div className="w-full -mt-0 md:mt-0 md:pt-8 grid gap-6">
                <div className="max-w-screen-lg mx-auto inset-x-0 grid gap-6 w-full mt-20 ">
                    <h1 className="text-5xl md:text-6xl font-italiana font-normal text-[#1ca6af] w-full text-center"> 
                        Magazine
                    </h1>
                    <div className="w-[95%] md:w-2/3 mx-auto inset-x-0 relative z-20">
                        <div className="flex items-center relative">
                                <input placeholder="catering, hoteles, fincas, vestidos" type="input" className="px-6 h-14 py-1 md:py-3 w-full rounded-full text-gray-500 text-sm md:text-base focus:outline-none transition shadow-lg " value={""}/>
                                <button className="hidden p-1 bg-color-base rounded-full z-30 right-16 absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                        </path>
                                    </svg>
                                </button>
                        </div>
                        <span className="bg-[#1ca6af] w-14 h-full rounded-full absolute top-0 right-0 flex items-center justify-center">
                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white w-6 h-6">
                                    <path d="M23.0065 22.2154L17.7686 16.9472C19.5414 14.9941 20.4848 12.4203 20.3944 9.77737C20.306 7.1344 19.1916 4.63178 17.289 2.80522C15.3864 0.978661 12.853 -0.0295042 10.2232 0.000147758C7.59538 0.0297997 5.08157 1.09331 3.22225 2.96336C1.36293 4.83341 0.305518 7.36173 0.274071 10.0067C0.244589 12.6497 1.245 15.2017 3.06108 17.1133C4.87716 19.0248 7.36542 20.1457 9.99323 20.2366C12.621 20.3275 15.1801 19.3787 17.1219 17.5956L22.3618 22.8657C22.4483 22.9527 22.5643 23.0001 22.6842 23.0001C22.806 23.0001 22.922 22.9507 23.0065 22.8657C23.093 22.7787 23.1401 22.6621 23.1401 22.5415C23.1401 22.4209 23.093 22.3023 23.0065 22.2154ZM1.21159 10.1332C1.21159 8.31454 1.74816 6.53938 2.75251 5.02714C3.75685 3.51489 5.18377 2.3387 6.85441 1.64286C8.52504 0.947032 10.3608 0.765167 12.1336 1.11901C13.9065 1.47286 15.5338 2.34858 16.8134 3.6335C18.0909 4.91841 18.9616 6.55717 19.3134 8.34024C19.6652 10.1233 19.4844 11.9716 18.7926 13.6499C18.1007 15.3302 16.9293 16.7653 15.4277 17.7755C13.9241 18.7856 12.1592 19.3253 10.3509 19.3253C7.92754 19.3233 5.60634 18.3527 3.89247 16.6309C2.17663 14.9072 1.21356 12.5706 1.21159 10.1332Z" fill="currentColor">
                                    </path>
                                </svg>
                        </span>
                    </div>
                    <div className="w-full relative hidden md:grid pt-1">
                            <ArticleMagazine/>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col pt-6 z-10 space-y-9">
                        <h2 className="text-[#1ca6af] text-xl font-bold  px-5 md:px-0 z-20 relative undefined">
                            Recomendados <span className="font-light">Para tu boda</span>
                        </h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5 pb-10">
                            <CardSliderMazine/>
                            <CardSliderMazine/>
                            <CardSliderMazine/>
                            <CardSliderMazine/>

                        </div>
                    </div>      
                </div>
                <div className="bg-white w-full py-10">
                    <div className="max-w-screen-lg mx-auto inset-x-0 grid gap-6 ">
                        <h2 className="uppercase text-[#49516f] text-lg text-center font-semibold tracking-widest w-full ">
                            Articulos segun tema
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                            <div className="flex items-center justify-center flex-col">
                                <button className="text-tertiary flex flex-col gap-2 items-center justify-center cursor-pointer p-2 rounded-full p-4 hover:bg-[#f2f2f2] ">
                                    <img src="https://api.bodasdehoy.com/uploads/04d34c/vestidpo.svg" alt="" className="p-3 transition w-20 h-20 flex justify-center items-center cursor-pointer" />
                                </button>
                                <small className="text-[#49516f] text-sm">
                                    Moda nupcial
                                </small>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                                <button className="text-tertiary flex flex-col gap-2 items-center justify-center cursor-pointer p-2 rounded-full p-4 hover:bg-[#f2f2f2]   ">
                                    <img src="https://api.bodasdehoy.com/uploads/e461dd/Actualidad.svg" alt="" className="p-3 transition w-20 h-20 flex justify-center items-center cursor-pointer" />
                                </button>
                                <small className="text-[#49516f] text-sm">
                                    Actualidad
                                </small>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                                <button className="text-tertiary flex flex-col gap-2 items-center justify-center cursor-pointer p-2 rounded-full p-4 hover:bg-[#f2f2f2]   ">
                                    <img src="https://api.bodasdehoy.com/uploads/049898/despues.svg" alt="" className="p-3 transition w-20 h-20 flex justify-center items-center cursor-pointer" />
                                </button>
                                <small className="text-[#49516f] text-sm">
                                    Despues de la boda
                                </small>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                                <button className="text-tertiary flex flex-col gap-2 items-center justify-center cursor-pointer p-2 rounded-full p-4 hover:bg-[#f2f2f2]   ">
                                    <img src="https://api.bodasdehoy.com/uploads/e46201/Antes%20de%20la%20boda.svg" alt="" className="p-3 transition w-20 h-20 flex justify-center items-center cursor-pointer" />
                                </button>
                                <small className="text-[#49516f] text-sm">
                                    Antes de la boda
                                </small>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                                <button className="text-tertiary flex flex-col gap-2 items-center justify-center cursor-pointer p-2 rounded-full p-4 hover:bg-[#f2f2f2]   ">
                                    <img src="https://api.bodasdehoy.com/uploads/e461ed/Ceremonia.svg" alt="" className="p-3 transition w-20 h-20 flex justify-center items-center cursor-pointer" />
                                </button>
                                <small className="text-[#49516f] text-sm">
                                    Ceremonia
                                </small>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                                <button className="text-tertiary flex flex-col gap-2 items-center justify-center cursor-pointer p-2 rounded-full p-4 hover:bg-[#f2f2f2]   ">
                                    <img src="https://api.bodasdehoy.com/uploads/27dc68/Banquetes.svg" alt="" className="p-3 transition w-20 h-20 flex justify-center items-center cursor-pointer" />
                                </button>
                                <small className="text-[#49516f] text-sm">
                                    Servicios
                                </small>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 max-w-screen-lg w-full mx-auto inset-x-0 gap-6 px-5 md:px-0 overflow-hidden ">
                    <div className=" col-span-2 w-full pb-6 ">
                        <h3 className=" text-lg text-[#1ca6af] font-semibold">
                            Ultimos articulos
                        </h3>
                        <div className=" wrapper transition">
                            <div className=" grid md:grid-cols-2 w-full gap-y-16 grid-rows-1 ">
                                <CardNotice/>
                                <CardNotice/>
                                <CardNotice/>
                                <CardNotice/>
                                <CardNotice/>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full hidden md:block ">
                        <div className="... w-full bg-white p-7 shadow-md rounded-xl">
                            <h3 className="font-semibold text-lg text-[#1ca6af] border-b border-gray-100 pb-4">
                                Top 5 articulos mas leidos
                            </h3>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia en colombia
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia en argentina
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia
                            </button>
                        </div>
                    </div>
                </div>
                <Newsletter/>
                
            </div>
            <Footer/>
        </div>
     );
}
 
export default MagazinePage;