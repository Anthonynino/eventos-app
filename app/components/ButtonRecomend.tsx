const ButtonRecomend = () => {
    return ( <>
        <div className="w-full py-10 mx-auto md:pl-0 overflow-hidden text-white">
    <div className="group relative md:w-28 md:h-28 w-20 h-20 rounded-full bg-[#f7628c] hover:bg-gray-400 transition duration-300 flex items-center justify-center p-3 mx-auto">
        <svg className="transition duration-200 w-1/2 h-1/2 group-hover:hidden">
            <image href="https://api.bodasdehoy.com/uploads/594237/Fotografos.svg" className="w-full h-full" />
        </svg>
        <p className="absolute inset-0 flex mt-1 items-center justify-center text-tertiary font-medium text-center text-xs md:text-sm capitalize hidden group-hover:flex">
            servicios para bodas
        </p>
    </div>
</div>

    </> );
}
 
export default ButtonRecomend;