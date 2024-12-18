const Newsletter = () => {
    return ( <>
        <div className="py-10 my-10 flex flex-col items-center justify-center bg-white gap-1 w-full px-5 md:px-0">
                    <h3 className="text-sm md:text-md text-[#f7628c] text-center">
                    ¿No te quieres perder las ultimas novedades para tu boda?
                    </h3>
                    <h4 className="text-sm text-gray-400">
                    Suscribete a nuestra newsletter
                    </h4>
                    <div className="h-20 flex items-center">
                        <div className="h-full flex items-center">
                            <form action="" className="flex items-center justify-center gap-3 *h-full">
                                <span className="h-full flex items-center">
                                    <div className="relative">
                                        
                                        <div>
                                            <input placeholder="Correo electronico" type="text" className=" bg-[#f2f2f2] text-sm focus:border focus:border-primary border-transparent focus:ring-transparent pr-3 py-2 rounded-lg w-full focus:outline-none placeholder-gray-400 text-gray-700 transition pl-3" />
                                        </div>
                                    </div>
                                </span>
                                <button className="bg-[#f7628c] text-white px-4 py-2 rounded-xl">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
    </> );
}
 
export default Newsletter;