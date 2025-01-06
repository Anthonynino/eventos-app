import EventList from "../EventsInLi";
import events from "../../app/events.json"

const MakeBoda = () => {
    return ( <>
        <div className="flex flex-col items-center pb-5 bg-white ">
            <h2 className="font-title text-4xl text-center md:text-6xl md:w-[45%] mx-auto *inset-x-0 text-[#1ca6af] pt-14 pb-3 font-[italiana]">
                Tu boda comienza cuando lo imaginas
            </h2>
            <span className="text-[#1ca6af] pb-3">haz tuyo cada instante hasta el gran día</span>
            <span className="text-xs pb-2">
                Participa en cada momento de la preparación de tu boda con la app EVENTOS ORGANIZADOR
            </span>
            <span className="text-xs">
            El brillo de tu gran día es el resultado de la perfecta coordinación de muchos detalles.
            </span>
        </div>
        <div className="max-w-screen-lg mx-auto inset-x-0 grid md:grid-cols-2 grid-cols-1 w-full h-[28rem]">
            <div className="relative p-2 w-auto h-auto md:h-auto -ml-4 ">
                <img src="https://www.bodasdehoy.com/_next/image?url=%2FbannerApp.webp&w=1920&q=75" alt="boda1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col justify-center cursor-default">
                <div className="w-full flex items-center justify-center py-10">
                    <a className="bg-[#1ca6af] rounded-full px-5 py-2 text-white hover:bg-white hover:text-[#1ca6af] transition border border-[#1ca6af]" href="https://organizador.bodasdehoy.com">
                        Quiero saber más
                    </a>
                </div>
            </div>
        </div>
        <div className="hidden md:block max-w-screen-lg mx-auto inset-x-0 w-full mt-8 pb-14">
            <h2 className="text-[#1ca6af] text-xl font-bold  px-5 md:px-0 z-20 relative undefined">Empresa de bodas <span className="font-light">según provincias</span></h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-1 py-4">
                {events.map((event, index) => (
                    <EventList key={index} events={event} />
                ))}

            </ul>
        </div>
    </> );
}
 
export default MakeBoda;