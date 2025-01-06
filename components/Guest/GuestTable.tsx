import GuestRow from "./RowGuest";

const GuestTable = () => {
    return ( <>
        <div className="bg-transparent pb-4 mt-5 rounded-md w-full grid col-span-12">
            <table role="table" className="w-full text-sm text-left text-gray-500">
                <div className="mb-10">
                    <GuestRow/>
                </div>
                <div className="mb-10">
                    <GuestRow/>
                </div>
                <div className="mb-10">
                    <GuestRow/>
                </div>  
                <div className="mb-10">
                    <GuestRow/>
                </div>                    

            </table>
        </div>
    </> );
}
 
export default GuestTable;