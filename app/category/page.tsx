import CardInfo from "../components/Cards/CardInfo";
import CardSliderMazine from "../components/Cards/CardMagazineSlider";
import CardSliderCategory from "../components/Cards/CardSliderCategory";
import FilterVer from "../components/FiltersBar/FiltersVer";
import Footer from "../components/Footer";
import Header from "../components/Navbar/Header";

const Category = () => {
    return ( <>
        <div className="bg-[#f2f2f2] flex flex-col relative w-full h-[100vh]">
            <Header/>
            <main className="w-full overflow-auto mt-20">
                <section className="flex flex-col gap-10 ">
                    <div>
                        <img src="https://api.bodasdehoy.com/uploads/fe6691/beautiful-young-women-with-wedding-dress-hanging-o-2021-09-03-21-05-18-utc%201%201-i640.webp" alt="" className="hidden md:block md:w-full md:h-60 md:transform md:-mt-32 md:z-10 md:object-center md:object-cover " />
                        <div className="bg-white relative overflow-hidden rounded-2xl max-w-screen-lg 2xl:max-w-screen-xl mx-auto inset-x-0 flex items-center justify-center p-4 relative md:-mt-12 shadow-md w-[95%] ">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="font-semibold text-[#f7628c] text-2xl capitalize z-10 relative ">
                                    Titulo de categoria
                                </h1>
                                <h3 className="font-medium text-gray-600 text-sm tracking-tight z-10 relative text-center">
                                Luce como siempre lo soñaste el gran día de tu boda
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-lg 2xl:max-w-screen-xl w-full mx-auto inset-x-0 grid grid-cols-1 items-center justify-between top-0 px-5 ">
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <CardSliderCategory/>
                                <CardSliderCategory/>
                                <CardSliderCategory/>
                                
                            </div>
                        </div>
                    </div>
                    <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl gap-4 md:gap-10 mx-auto inset-x-0 grid md:grid-cols-7 2xl:grid-cols-5 h-full w-full">
                        <FilterVer/>
                        <div className="md:col-span-5 2xl:col-span-4 w-full">
                            <div className="flex items-center justify-start gap-4 px-5 pb-5 w-full">
                                <p className="text-sm text-gray-500 ">
                                    Resultados encontrados: 15
                                </p>
                            </div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 px-5 h-full ">
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                <CardInfo/>
                                
                                
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main> 
        </div>
    </> );
}
 
export default Category;