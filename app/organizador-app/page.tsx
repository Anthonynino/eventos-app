
"use client"
import NavbarApp from "../../components/Common/NavbarApp";
import { FaRegSquarePlus } from "react-icons/fa6";

import CardEvent from "../../components/Cards/CardEvent";
import Modal from "../../components/Modal/NewEvent";
import { useState } from "react";
import NavbarDown from "@/components/Common/NavbarDown";


const AppEvents = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return ( 
        <div className="w-[100vw] h-[100vh]">
            <NavbarDown/>
            <NavbarApp/>
        <div className="w-[100%]  overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
            <main >
                    <section className=" section relative w-full">
                        <div className=" banner bg-[#f2f2f2] w-full flex justify-center h-[60%] md:h-[calc(100%-200px-50px)] md:min-h-[300px] px-5 md:px-0 overflow-hidden relative mb-1">
                            <div className=" md:max-w-screen-lg 2xl:max-w-screen-xl w-full grid md:grid-cols-5 h-80">
                                <div className=" flex flex-col justify-center relative py-10 md:py-0 col-span-2">
                                    <h2 className=" font-display font-medium text-2xl md:text-5xl tracking-tight text-[#1ca6af] mb-1.5">
                                        Organiza tus eventos
                                    </h2>
                                    <h3 className=" font-display font-medium text-1xl md:text-3xl tracking-tight	text-gray-500 mb-1.5">
                                    Comparte, colabora e invita
                                    </h3>
                                    <h1 className=" font-display font-base text-md tracking-tight text-[#1ca6af]">
                                    Planifica tus celebraciones <span className="font-semibold">Sin estres</span>
                                    </h1>
                                    <span className=" flex gap-2 justify-start items-end">
                                        <button onClick={openModal} className=" mt-4 bg-[#1ca6af] font-display font-medium text-white px-5 md:px-24 py-2 rounded-lg  box-border hover:bg-gray-200 transition focus:outline-none z-20">
                                            Crear evento
                                        </button>
                                    </span>
                                    <svg width="841" height="211" viewBox="0 0 841 211" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:flex md:-bottom-10 xl:-bottom-5 absolute z-10 left-0 w-max">
                                        <path d="M834.255 61.6293C824.774 61.1173 815.306 60.4368 805.844 60.1465C783.858 59.4613 761.943 60.9467 740.103 63.3187C727.504 64.6881 714.912 66.1406 702.359 67.7293C689.668 69.3298 676.972 71.2096 664.285 72.8655C645.865 75.2838 627.46 77.8684 608.924 79.2363C598.737 79.9837 588.545 80.3409 578.348 80.3079C566.666 80.2606 555.025 79.7076 543.437 78.1177C535.9 77.079 528.483 75.4722 521.23 73.1539C520.625 72.9538 520.025 72.8091 519.364 72.6137C519.13 73.1635 518.913 73.5725 518.755 74.0323C511.966 95.1421 499.591 112.454 482.667 126.633C468.465 138.546 452.205 146.642 434.445 151.906C419.637 156.308 404.459 158.314 389.114 158.994C377.787 159.503 366.493 159.088 355.172 158.34C325.179 156.349 295.584 151.45 265.931 146.863C247.119 143.957 228.262 141.195 209.422 138.626C197.806 137.038 186.088 136.24 174.339 135.724C160.257 135.126 146.209 135.25 132.201 136.85C106.514 139.77 82.2305 147.036 60.2824 161.081C47.4726 169.248 36.3279 179.229 27.0664 191.283C22.827 196.803 18.6177 202.348 14.376 207.84C13.7207 208.705 12.9774 209.521 12.292 210.36C12.1436 210.261 11.9952 210.162 11.819 210.065C12.106 209.483 12.335 208.877 12.7101 208.343C19.5308 198.895 26.1983 189.292 34.2178 180.774C48.478 165.564 65.608 154.493 84.9858 146.831C94.6075 143.034 104.522 140.05 114.661 138.078C125.158 136.021 135.757 134.513 146.493 134.306C154.797 134.136 163.091 133.855 171.378 134.16C181.691 134.574 192.006 135.351 202.285 136.353C226.99 138.735 251.44 143.063 275.936 146.941C296.343 150.159 316.748 153.349 337.333 155.352C347.892 156.359 358.501 156.971 369.076 157.503C382.184 158.183 395.238 157.557 408.256 155.845C432.99 152.587 456.022 144.757 476.211 129.772C494.132 116.458 507.469 99.5953 515.54 78.7402C516.255 76.9219 516.823 75.0323 517.422 73.168C517.536 72.8516 517.561 72.4867 517.66 72.0039C516.731 71.608 515.857 71.2073 514.957 70.8367C508.868 68.3645 503.121 65.3054 497.908 61.2803C492.935 57.4304 488.881 52.8612 486.587 46.9158C485.477 44.0516 484.919 41.085 485.364 38.0618C486.148 32.7497 490.503 28.9225 496.203 28.1069C506.359 26.6644 515.987 32.2425 519.756 43.0583C522.227 50.105 522.167 57.365 520.962 64.6658C520.632 66.7306 520.161 68.7794 519.734 71.0199C520.656 71.3327 521.495 71.6526 522.33 71.9171C531.68 74.8677 541.29 76.5687 551.033 77.5329C561.399 78.584 571.784 78.8523 582.199 78.8112C598.407 78.728 614.552 77.5618 630.629 75.5921C639.276 74.528 647.959 73.5447 656.6 72.3974C666.156 71.1451 675.701 69.7542 685.253 68.4464C691.593 67.5769 697.932 66.7075 704.312 65.9742C720.456 64.1383 736.617 62.1616 752.787 60.6306C763.845 59.5864 774.97 59.011 786.087 58.6595C801.618 58.1869 817.164 58.5501 832.659 59.978C833.143 60.0767 833.612 59.9814 834.114 59.9669C834.161 60.521 834.208 61.0752 834.255 61.6293ZM518.157 70.2599C518.354 69.6015 518.557 69.0263 518.703 68.428C519.895 63.6396 520.439 58.7943 520.304 53.8667C520.117 48.3296 518.915 43.0455 515.829 38.3389C511.269 31.4127 503.487 28.1345 495.416 29.7359C490.513 30.7074 487.26 34.3023 486.695 39.2331C486.458 41.4017 486.992 43.4215 487.636 45.4043C489.329 50.5353 492.506 54.6762 496.527 58.1878C502.572 63.4541 509.578 67.1605 517.017 70.0212C517.337 70.1616 517.675 70.1889 518.157 70.2599Z" fill="#D0D0D0">
                                        </path>
                                    </svg> 
                                </div>
                                <div className="hidden md:block relative overflow-hidden col-span-3">
                                        <img src="https://organizador.bodasdehoy.com/IndexImg2.png" alt="" className="z-20 image mx-auto inset-x-0 relative top-16" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mt-5 w-full flex flex-col h-[40%] md:h-[200px] justify-center items-center max-w-screen-lg xl:max-w-screen-xl inset-x-0 mx-auto relative">
                            <div className="flex gap-4 mt-[10%] lg:mt-[100%] md:mt-[100%] relative">
                                <button className="bg-tertiary text-gray-500 w-max md:mt-4 mb-3 md:mb-2 px-4 py-0.5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-tertiary hover:text-gray-500 transition focus:outline-none text-sm font-display">
                                        pendientes
                                </button>
                                <button className="bg-white text-gray-500 w-max md:mt-4 mb-3 md:mb-2 px-4 py-0.5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-gray-500 transition focus:outline-none text-sm font-display">
                                        Archivados
                                </button>
                                <button className="bg-white text-gray-500 w-max md:mt-4 mb-3 md:mb-2 px-4 py-0.5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-gray-500 transition focus:outline-none text-sm font-display">
                                        Realizados
                                </button>
                            </div>
                            <div className="w-full h-max mb-[10%] lg:mb-[100%] md:mb-[100%] ">
                                <div>
                                    <div>
                                        <div className="false mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
                                            <div className="flex items-center justify-center my-3">
                                                <CardEvent/>
                                            </div>
                                            <div className=" flex items-center justify-center my-3">
                                                <div className="w-72 h-36 rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg bg-[#f2f2f2] border border-gray-100 transition text-[#1ca6af]">
                                                    <FaRegSquarePlus className="text-[#1ca6af] w-10 h-10"/>
                                                    <p className="font-display font-base text-md">
                                                        Crear nuevo evento
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-0 cursor-pointer hidden md:block ">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none">
                                    </path>
                                    <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8">
                                    </path>
                                    <path d="M3 10h18">
                                    </path>
                                    <path d="M10 3v18">
                                    </path>
                                    <path d="M16 22l5 -5">
                                    </path>
                                    <path d="M21 21.5v-4.5h-4.5">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </section>
            </main>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            <form action="" className='w-full'>
                    <div className='border-l-2 border-gray-100 pl-3 w-full '>
                        <h2 className='font-display text-3xl capitalize text-[#1ca6af] font-light'>
                            Crear
                        </h2>
                        <h2 className='font-display text-5xl capitalize text-gray-500 font-medium'>
                            Evento
                        </h2>
                    </div>
                    <div className='flex flex-col gap-5 py-6 w-full'>
                        <div>
                            <div className=' w-full h-max relative'>
                                <label htmlFor="" className='font-display text-primary text-sm w-full'>Nombre del evento</label>
                                <div className=' w-full relative flex items-center'>
                                    <input type="text" className=' font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-1 rounded-xl focus:ring-0 focus:outline-none transition' />
                                </div>
                            </div>
                        </div>
                        <div className=' relative* w-full h-full col-spanundefined content-between'>
                            <label htmlFor="" className=' font-display text-sm text-[#1ca6af] w-full'>
                            Tipo de evento
                            </label>
                            <div className=' relative'>
                                <select name="" id="" className=' font-display capitalize cursor-pointer text-sm text-gray-500 border border-gray-300 focus:border-gray-400 focus:ring-0 transition w-full py-2 pr-7 rounded-xl focus:outline-none'>
                                    <option value="">Seleccionar</option>
                                </select>
                            </div>
                        </div>
                        <div className=' w-full h-max relative'>
                            <label htmlFor="" className=' font-display text-[#1ca6af] text-sm w-full'>Fecha del evento</label>
                            <div className=' w-full relative flex items-center'>
                                <input type="date" className=' false font-display text-sm text-gray-500 border-[1px] border-gray-200 focus:border-gray-400 w-full py-2 px-4 rounded-xl focus:ring-0 focus:outline-none transition undefined' />
                            </div>
                        </div>
                        <button className='font-display rounded-full mt-4 py-2 px-6 text-white font-medium transition w-full hover:opacity-70 bg-[#1ca6af]'>
                            Guardar
                        </button>
                    </div>
                
                </form>
            </Modal>
        </div>

        
     );
}
 
export default AppEvents;