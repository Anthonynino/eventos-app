const PaymentsTable = () => {
    return ( <>
        <div className=" w-full gap-6 pt-2 md:pr-0 pb-4 h-[100vh]">
            <div className="w-full max-w-screen-lg relative mx-auto inset-x-0 ">
                <div className="bg-white p-6 h-max shadow-md rounded-xl mt-10 overflow-x-auto* ">
                    <div className="w-full ">
                    <table className="table-auto border-collapse w-full rounded-lg relative p-4 ">
                        <thead className="relative text-xs text-gray-800 uppercase bg-gray-100 w-full">
                            <tr role="row" className="grid grid-cols-24">
                                <th role="columnheader" colSpan={1} className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                                        ESTADO
                                    <th role="columnheader" colSpan={1} className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                                        Proveedor
                                    </th>
                                    <th role="columnheader" colSpan={1} className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                                        Fecha de pago
                                    </th>
                                    <th role="columnheader" colSpan={1} className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                                    Importe
                                    </th>
                                    <th role="columnheader" colSpan={1} className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                                    Modo de pago

                                    </th>
                                    <th role="columnheader" colSpan={1} className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                                        cONCEPTO
                                    </th>
                                    <th role="columnheader" colSpan={1} className="px-6 py-1 md:py-2 text-center flex justify-center items-center text-sm font-light font-display col-span-4">
                                        soporte
                                    </th>
                                </th>
                                
                            </tr>
                        </thead>
                            <tbody className="text-gray-700 text-sm ">
                                <tr className="transition border-b border-base hover:bg-base cursor-pointer w-full grid place-items-center">
                                    <td className="py-5 font-display text-lg text-gray-500 uppercase ">
                                    No hay pagos asociados
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default PaymentsTable;