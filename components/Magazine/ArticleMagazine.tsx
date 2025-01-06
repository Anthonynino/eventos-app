const ArticleMagazine = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 relative rounded-xl">
                <div className="md:col-span-2 relative z-20">
                    
                </div>
                <div className="relative md:col-start-2">
                    <img
                        src="https://api.bodasdehoy.com/uploads/ded2c3/tendencias-de-bodas.jpg"
                        alt="Placeholder"
                        className="w-full h-auto rounded-xl"
                    />
                </div>
                <div className="bg-white w-3/5 rounded-2xl shadow-lg h-max absolute top-1/3 mt-3 left-0 md:left-[2%] py-6 px-12 z-10">
                    <h2 className="font-semibold text-xl cursor-pointer hover:text-gray-700 transition text-gray-800">
                        7 tendencias de bodas que desapareceran ¡impresionante!
                    </h2>
                    <div className="grid grid-cols-8 pt-3">
                        <div className="col-span-2 flex flex-col justify-center items-start border-r pr-3 border-[#1ca6af] py-1">
                            <p className="text-gray-600 text-xs">17 de junio de 2021</p>
                        </div>
                        <div className="col-span-6 px-4 flex items-center text-xs text-gray-700">
                            <span>
                                Siempre pensamos en las nuevas tendencias de bodas, en la moda y en las más recientes propuestas, lo que nos lleva a dejar de lado antiguas alternativas que aún pueden servirnos. Hoy presentamos a ustedes 7 tendencias de bodas.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default ArticleMagazine;