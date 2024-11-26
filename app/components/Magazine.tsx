import ArticleMagazine from "./ArticleMagazine";

const Magazine = () => {
    return ( 
        <div className="max-w-screen-lg mx-auto mt-10 relative">
            <div className="relative z-10">
                <ArticleMagazine />
            </div>
            <h1 className="text-7xl text-[#f7628c] font-italiana absolute inset-0 flex items-center ms-8 pb-10 mb-48 z-20">
                Magazine
            </h1>
        </div>
     );
}
 
export default Magazine;