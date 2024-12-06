import Link from "next/link";

const CardSliderMazine = () => {
    return ( <>
        <div>
            <div className="w-[90%] h-full mx-auto mt-5 inset-x-0 bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:opacity-95 transition-all cursor-pointer duration-400 border">
                <Link href="/magazine/como-calcular-vino-para-una-boda-paso-a-paso">
                    
                        <img alt="¿Cómo calcular vino para una boda? paso a paso" className="h-40 w-full object-cover object-center" src="https://api.bodasdehoy.com/uploads/ded266/como-calcular-vino-para-una-boda.jpg" />
                        <div className="py-5 text-center h-full">
                            <h3 className="text-gray-700 text-md font-semibold border-b border-[#f7628c] pb-3 px-5 leading-5 cursor-pointer hover:text-gray-800">
                                <span className="md:line-clamp-2 line-clamp-1">¿Cómo calcular vino para una boda? paso a paso</span>
                            </h3>
                            <div className="flex justify-between items-center py-2 px-5">
                                <p className="text-xs tracking-widest text-[#f7628c]">CEREMONIA</p>
                            </div>
                            <p className="text-xs px-4 py-4 text-gray-500">
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis iusto modi animi libero officia cum eum ea dicta aliquid asperiores tenetur reiciendis, quas accusamus nihil ipsa facere laudantium quidem.
                                </span>
                            </p>
                        </div>
                    
                </Link>
            </div>
        </div>
    </> );
}
 
export default CardSliderMazine;