const CardNotice = () => {
    return ( <>
        <div className="w-[90%] h-full mx-auto my-6 inset-x-0 bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:opacity-95 transition-all cursor-pointer duration-400 border ">
                                    <div>
                                        <div>
                                            <img src="https://api.bodasdehoy.com/uploads/ded2bb/luna-de-miel-en-europa.jpg" alt="" className="h-40 w-full object-cover object-center" />
                                            <div className="py-5 text-center h-full">
                                                <h3 className=" text-gray-700 text-md font-semibold border-b border-[#f7628c] pb-3 px-5 leading-5 cursor-pointer hover:text-gray-800">
                                                    <span className="md:line-clamp-2 line-clamp-1">
                                                    5 destinos de ensueño para luna de miel en Europa
                                                    </span>
                                                </h3>
                                                <div className="flex justify-between items-center py-2 px-5">
                                                    <p className="text-xs tracking-widest text-[#f7628c]">
                                                        Ceremonia
                                                    </p>
                                                    <p className="text-xs text-gray-500">19/4/2023</p>
                                                </div>
                                                <p className="text-xs px-4 py-2 text-gray-500 ">
                                                    <span className="line-clamp-6">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, voluptatum magni omnis officiis dolor consequuntur cum, nesciunt eius autem accusantium tempora vero, reprehenderit iure harum natus tenetur sint voluptates quidem!
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    </> );
}
 
export default CardNotice;