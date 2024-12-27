const TableInvitations = () => {
    return ( <>
    <table className="table-auto border-collapse w-full rounded-lg relative p-4 ">
        <thead className="relative text-xs text-gray-800 uppercase bg-gray-100 w-full">
            <tr role="row" className="grid grid-cols-24">
                
                <th role="columnheader" colSpan={1} className="px-10 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                        Nombre
                    <th role="columnheader" colSpan={1} className="px-10 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                        Correo
                    </th>
                    <th role="columnheader" colSpan={1} className="px-10 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                        Telefono
                    </th>
                    <th role="columnheader" colSpan={1} className="px-10 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                        Invitacion
                    </th>
                    <th role="columnheader" colSpan={1} className="px-10 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                        Acompanantes
                    </th>
                    <th role="columnheader" colSpan={1} className="px-10 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                        Enviado
                    </th>
                </th>
                
            </tr>
        </thead>
            <tbody className="text-gray-700 text-sm ">
                <tr className="transition border-b border-base hover:bg-base cursor-pointer w-full grid place-items-center">
                    <td className="py-5 font-display text-lg text-gray-500 uppercase ">
                    No hay invitados asociados al evento
                    </td>
                </tr>
            </tbody>
    </table>
    </> );
}

export default TableInvitations;