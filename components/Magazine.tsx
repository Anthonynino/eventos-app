
import ArticleMagazine from "./Magazine/ArticleMagazine";
import ButtonSlider from "./Buttons/ButtonSlider";
import CardSliderMazine from "./Cards/CardMagazineSlider";

const Magazine = () => {
    return ( 
        <>
            <div className="max-w-screen-lg mx-auto relative py-8">
            <div className="relative z-10 hidden md:block">
                <ArticleMagazine />
            </div>
            <h1 className="text-7xl text-[#1ca6af] font-italiana absolute inset-0 flex items-center justify-center md:justify-start md:items-start md:top-10 md:left-8 z-20">
                Magazine
            </h1>
      
        </div>
        <div className="w-full">
            <ButtonSlider />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <CardSliderMazine/>
                <CardSliderMazine/>
                <CardSliderMazine/>
                <CardSliderMazine/>
            </div>
        </div>
        </>
     );
}
 
export default Magazine;