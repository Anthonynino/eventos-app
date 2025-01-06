import { IoDiamondOutline } from "react-icons/io5";
interface PhoneInputProps {
    imageUrl: string;
}

const PhoneInput:React.FC<PhoneInputProps> = ({imageUrl}) => {
    return ( <>
        <div>
            <div className="grid grid-cols-1 justify-items-center items-center md:pt-14 pt-7">
                <div className="col-span-1 w-[80%]">
                    <div className="flex items-center space-x-2 justify-center ">
                        <span className="text-[25px] text-[#1ca6af]">
                            Redacta tu invitacion
                            
                        </span>
                        <IoDiamondOutline className="text-[#fbff4e]"/>
                    </div>
                    <p className="text-[13px] indent-3 text-gray-500 pb-2 text-center ">
                    or favor, redacta tu invitación a continuación. Puedes incluir detalles sobre el evento, la fecha, la ubicación y cualquier otra información relevante. ¡Esperamos verte pronto!
                    </p>
                </div>
                <div className="relative">
                    <img src={imageUrl} alt="" />
                    <textarea rows={9} placeholder="Escribe algo..." name="" id="" className="w-[225px] text-[13px] rounded-md focus:ring-0 focus:border-none border-none absolute top-[218px] left-[54px] bg-transparent leading-[15px]">
                    
                    </textarea>
                </div>
            </div>
        </div>
    </> );
}
 
export default PhoneInput;