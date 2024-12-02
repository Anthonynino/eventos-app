interface SitesListProps {
    sites: { name: string, href: string, img: string }[]
}

const CardImg:React.FC<SitesListProps> =  ({sites}) => {
    return ( <>
        <div className="card">
            <img src={sites.img} alt="Lugar 1" className="w-full h-32 md:h-52 bg-gray-100 rounded-2xl object-center object-cover" />
            <h3 className="text-left mt-2 text-lg font-normal text-gray-600">{sites.name}</h3>
        </div>
    </> );
}
 
export default CardImg;