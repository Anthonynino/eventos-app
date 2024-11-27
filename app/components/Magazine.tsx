import ArticleMagazine from "./ArticleMagazine";

const Magazine = () => {
    return ( 
        <div className="max-w-screen-lg mx-auto mt-10 relative py-8">
            <div className="relative z-10 hidden md:block">
                <ArticleMagazine />
            </div>
            <h1 className="text-7xl text-[#f7628c] font-italiana absolute inset-0 flex items-center justify-center md:justify-start md:items-start md:top-10 md:left-8 z-20">
                Magazine
            </h1>
        </div>
     );
}
 
export default Magazine;