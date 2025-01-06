import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        
        <div className=" bg-white w-full sm:w-1/3 lg:w-1/3 z-[60] fixed top-0 left-0 h-full md:rounded-r-2xl shadow-lg flex flex-col items-center justify-center transform transition duration-300 translate-x-0 ">
            <style jsx global>{`
                    body {
                        overflow: hidden;
                    }
                    body::before {
                        content: '';
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(40, 40, 40, 0.8);
                        backdrop-filter: blur(2px);
                        z-index: 50;
                    }
                `}</style>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-[#f2f2f2] w-10 h-10 rounded-full">
                X
            </button>
            <div className=' flex w-full items-start p-12 overflow-auto'>
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
            </div>
        </div>
    );
};

export default Modal;