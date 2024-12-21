import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const CardInfo = () => {
    return ( 
        <div className='flex'>
            <div className="rounded-xl h-fit w-full transition-all duration-500 cursor-pointer mx-auto inset-x-0  md:mb-0 ">
                            <img src="https://api.bodasdehoy.com/uploads/5d504d/logo-finca Torre Bsch-i640.webp" className="h-60 md:h-60 rounded-xl w-full relative object-cover object-center transition-all opacity-100" alt="" />
                            <div className="bg-white transition-[height] overflow-hidden shadow rounded-xl md:-mt-16 -mt-10 p-6 flex h-max flex-col z-20 relative">
                                <h2 className="text-sm pb-0.5 text-tertiary font-semibold truncate capitalize w-full">Hotel atenas</h2>
                                <div className="flex gap-0.5 items-center">
                                    <FaStar className="text-[#fdf433]" />
                                    <FaStar className="text-[#fdf433]" />
                                    <FaStar className="text-[#fdf433]" />
                                    <FaStar className="text-[#fdf433]" />
                                </div>
                                <div className="flex items-end gap-2 pt-2">
                                    <span>
                                        <FaLocationDot className="text-primary w-4 h-4" />
                                    </span>
                                    <p className="text-gray-500 text-xs truncate">
                                        alicante
                                    </p>
                                </div>
                                <span className="h-0 mt-2 opacity-0 text-xs text-gray-500 line-clamp-4 transition-all duration-500 group-hover:h-auto group-hover:opacity-100">
                                    Hotel Huerto del CuraUn oasis en el palmeral de Elche**** estrellas💍 Bodas y eventos únicos🍴 
                                    Restaurante Els CapellansÚnico en el mundo, el Hotel Huerto del Cura está 
                                    en el corazón del Palmeral de Elche, declarado Patrimonio de la Humanidad por la UNESCO.
                                </span>
                            </div>
                        </div>
        </div>
     );
}
 
export default CardInfo;