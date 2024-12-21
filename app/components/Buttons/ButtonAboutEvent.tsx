const ButtonAboutEvent = () => {
    return ( <>
        <div className=" py-2 pb-8 relative">
            <button className="relative bg-white rounded-full w-32 md:w-40 h-32 md:h-40 shadow-md gap-2 flex flex-col items-center justify-center focus:outline-none mx-auto inset-x-0">
               <span className="leading-4 text-center">
                    <p className="font-display font-light md:text-md text-gray-500">
                        Color
                    </p>
               </span>
            </button>
        </div>
    </> );
}
 
export default ButtonAboutEvent;