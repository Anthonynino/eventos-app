const DesignInvitation = () => {
    return ( <>
        <div className="col-span-3 pt-4 md:p-6 w-full">
            <div className="my-4 flex flex-col justify-center items-center translate-y-10 md:translate-y-0">
                <div className="w-full -translate-y-4">
                    <div className="w-full rounded-xl bg-green-300 shadow-lg px-6">
                        <p className="font-display">
                        Encuentra a un diseñador para tu invitación
                        </p>
                    </div>
                    <div style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9V9ntA0C-4Yjc6Vb4YnzF7m7fIhZYhSi0w&s')"}} className=" h-40 w-full bg-white banner grid place-items-center rounded-xl my-4 relative" >
                        <div className=" bg-[#f7628c] w-40 h-40 rounded-full absolute right-0 inset-y-0 my-auto p-8 flex items-center justify-center">
                            <div className=" w-max h-max relative">
                                <p className=" font-display text-xs text-white">
                                    Por solo
                                </p>
                                <p className=" font-display text-sm text-white">
                                    Tu invitacion
                                </p>
                                <button className=" focus:outline-none bg-[#fffb4e] text-gray-500 font-display text-sm px-2 rounded-lg w-full hover:text-[#f7628c] hover:bg-white transition">
                                    Disenar
                                </button>
                                <div className=" bg-[#fffb4e] w-20 h-20 absolute rounded-full top-0 right-0 translate-x-1/2 -translate-y-3/4 transform flex items-center justify-center">
                                    <p className=" font-display text-[#f7628c] text-5xl font-bold">
                                        5<span className="text-xl font-normal">€</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default DesignInvitation;