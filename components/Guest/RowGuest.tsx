import { IoMdArrowDropup } from "react-icons/io";

const GuestRow = () => {
    return ( <>
        <thead className="relative text-xs text-gray-700 uppercase bg-gray-100 w-full mt-7">
                    <tr role="row" className="grid grid-cols-24">
                        <th colSpan={1} role="columnheader" className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-5">
                            <h3 className=" text-gray-500 text-left truncate capitalize font-medium">cumpleañero o cumpleañera</h3>
                            <th colSpan={1} role="columnheader" className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-3">
                                Asistencia
                            </th>
                            <th colSpan={1} role="columnheader" className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-3">
                                menu
                            </th>
                            <th colSpan={1} role="columnheader" className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-3">
                                Mesa recepcion
                            </th>
                            <th colSpan={1} role="columnheader" className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-3">
                                Mesa ceremonia
                            </th>
                            <th colSpan={1} role="columnheader" className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-3">
                                Acompanantes
                            </th>
                            <th colSpan={1} role="columnheader" className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-3">
                               <div className="w-full flex justify-end items-center relative">
                                    <span className="cursor-pointer relative w-max rounded-lg text-sm text-gray-700 ">
                                        <IoMdArrowDropup className="text-gray-500 w-4 h-4 trans"/>
                                    </span>
                                    <ul className="hidden top-0 right-0 absolute w-max border border-base bg-white capitalize rounded-md overflow-hidden shadow-lg z-10 translate-x-[-12px]">
                                        <li className="font-display cursor-pointer bor</ul>der-base border block px-4 text-sm text-gray-500 hover:text-gray-500 hover:bg-base">
                                        borrar grupo
                                        </li>
                                    </ul>
                               </div>
                            </th>
                        </th>
                    </tr>
                </thead>
                <tbody className="mb-10">
                    <tr className="bg-white border-b font-display text-sm w-full grid grid-cols-12">
                        <td className="pl-6 py-4 col-span-1 table-cell ">

                        </td>
                        <td className="py-4 w-max pl-5 text-gray-300">
                            No hay invitados
                        </td>
                    </tr>
                </tbody>
                
    </> );
}
 
export default GuestRow;