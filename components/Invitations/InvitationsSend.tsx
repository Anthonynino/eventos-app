import TableInvitations from "./TableInvitations";

const InvitationsSend = () => {
    return ( <>
    <div className=" bg-white w-full rounded-xl shadow-md relative mt-4 mb-8">
                                            <div className="bg-white w-full shadow-lg rounded-xl ">
                                                <h2 className="font-display font-medium text-gray-500 text-2xl text-left py-4 pl-4">
                                                    Invitaciones Enviadas
                                                </h2>
                                            </div>
                                            <div className=" w-full overflow-auto">
                                                <div className=" w-[200%] md:w-full">
                                                    <div>
                                                        <div className="relative">
                                                            <div className=" flex justify-between py-3 ml-[52px] w-auto pr-5 relative">
                                                                <button className="focus:outline-none bg-gray-300 text-white py-1 px-2 rounded-lg text-center text-[10px] md:text-sm capitalize">
                                                                    Enviar
                                                                </button>
                                                            </div>
                                                            <TableInvitations/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    </> );
}
 
export default InvitationsSend;