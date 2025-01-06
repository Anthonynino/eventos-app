import { FaChevronRight } from "react-icons/fa";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import CategoryMagazine from "../../components/Buttons/CategoryMagazine";
import { GoTag } from "react-icons/go";
import Tag from "../../components/Buttons/Tag";
import Newsletter from "../../components/Common/Newsletter";
import { HiMagnifyingGlass } from "react-icons/hi2";

const MagazineDetails = () => {
    return ( 
    <div className="bg-[#f2f2f2] flex flex-col relative w-full h-[100vh]">
        <Header/>
        <main className="w-full overflow-auto mt-20">
            <section className="w-full flex flex-col items-center md:mt-3 mt-16 ">
                <div className="w-full mx-auto inset-x-0 px-5 xl:px-64 lg:px-32 md:px-16 sm:px-8">
                    <span className="hidden md:block">
                        <div className="lg:max-w-screen-lg mx-auto inset-x-0 flex items-center w-full text-sm text-gray-500 capitalize font-light py-4 w-full sm:flex">
                            <nav className="flex w-full">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <span className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer ">
                                            Inicio
                                        </span>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <FaChevronRight className=""/>
                                            <span className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-900 md:ml-2 cursor-pointer ">
                                                Magazine
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <FaChevronRight className=""/>
                                            <span className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-900 md:ml-2 cursor-pointer ">
                                                Magazine
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </span>
                    <div className="w-full relative -mt-16 md:mt-0">
                        <div className="relative w-full flex items-center justify-end h-full overflow-hidden pb-28 md:pb-0 ">
                            <div className="w-5/6 mx-auto md:mx-0 inset-x-0 md:w-1/2 p-8 bg-white absolute md:top-0 my-auto md:inset-y-0 bottom-0 h-max left-0 rounded-xl">
                                <h1 className="text-[#41596f] text-xl font-semibold border-b pb-4 border-[#1ca6af]">Musica para boda religiosa: 10 canciones que no pueden faltar</h1>
                                <p className="text-sm text-gray-500 pt-4"> hoy traemos a vosotros eso que estabas buscando para elegir vuestra música </p>
                                <p className="absolute bottom-0 transform pt-3 translate-y-full text-xs text-gray-500 italic">Por Andrea Cardozo</p>
                            </div>
                            <img alt="mascara" className="w-full md:w-3/5 bg-gray-300 h-80 md:h-96 rounded-xl object-cover object-center" src="https://api.bodasdehoy.com/uploads/ded2b3/miriam-alegria-1-i640.webp" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 w-full gap-6 py-8">
                        <div className="md:col-span-2 bg-white rounded-xl p-8 grid grid-cols-6">
                            <div className="flex items-center gap-4 flex-wrap col-span-5">
                                <CategoryMagazine/>
                                <CategoryMagazine/>
                                <CategoryMagazine/>
                                <CategoryMagazine/>
                               
                            </div>
                            <div className="w-full col-span-6 text-sm pt-8 ">
                                <span>
                                    <p>
                                    Casarse por la iglesia no es una decisión sencilla, pero sin duda es de las ceremonias más hermosas que existen, y con el “si” también vienen varias decisiones.
                                    </p>
                                    <br />
                                    <br />
                                    <h2>
                                    <strong>¿Cuál música para boda religiosa seleccionar?</strong>
                                    </h2>
                                    <br />
                                    <br />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat, voluptates saepe quam nesciunt corrupti voluptate nostrum esse obcaecati consequatur quia? Magni explicabo doloremque cum amet tempore et velit voluptate?
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat, voluptates saepe quam nesciunt corrupti voluptate nostrum esse obcaecati consequatur quia? Magni explicabo doloremque cum amet tempore et velit voluptate?
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat, voluptates saepe quam nesciunt corrupti voluptate nostrum esse obcaecati consequatur quia? Magni explicabo doloremque cum amet tempore et velit voluptate?
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat, voluptates saepe quam nesciunt corrupti voluptate nostrum esse obcaecati consequatur quia? Magni explicabo doloremque cum amet tempore et velit voluptate?
                                    </p>
                                </span>
                                <div className="flex items-center flex-wrap gap-2 pt-8 ">
                                    <GoTag className="text-[#1ca6af] w-6 h-6 "/>
                                    <Tag/>
                                    <Tag/>

                                </div>
                            </div>
                        </div>
                        <aside className="hidden md:flex col-span-1 flex-col gap-8 mt-10 relative">
                            <div className="relative w-full">
                                <div className="flex items-center relative">
                                    <input type="text" placeholder="Que buscas>" className="px-6 h-14 py-1 md:py-3 w-full rounded-full text-gray-500 text-sm md:text-base focus:outline-none transition shadow-lg" />
                                    <button className="hidden p-1 bg-color-base rounded-full z-30 right-16 absolute">
                                    </button>
                                </div>
                                <span className="bg-[#1ca6af] w-14 h-full rounded-full absolute top-0 right-0 flex items-center justify-center">
                                    <HiMagnifyingGlass className="text-white w-6 h-6"/>
                                </span>
                            </div>
                            <div className="... w-full bg-white p-7 shadow-md rounded-xl">
                            <h3 className="font-semibold text-lg text-[#1ca6af] border-b border-gray-100 pb-4">
                                Top 5 articulos mas leidos
                            </h3>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia en colombia
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia en argentina
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia
                            </button>
                            <button className="py-4 border-b border-gray-100 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                Mejores lugares para tu ceremonia
                            </button>
                        </div>
                        </aside>
                    </div> 
                </div>
                <Newsletter/>
            </section>
            <Footer/>
        </main>        
    </div> );
}
 
export default MagazineDetails;