const Magazine = () => {
    return ( 
        <div className="max-w-screen-lg mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Magazine</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="bg-white p-6 shadow-lg z-10 relative md:-mr-16">
                    <h2 className="text-2xl font-semibold mb-4">Título del Artículo</h2>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#" className="text-blue-500 hover:underline">Leer más</a>
                </div>
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Placeholder"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Magazine;