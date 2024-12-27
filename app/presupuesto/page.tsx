"use client";
import MinHeader from "../components/MinHeader";
import NavbarApp from "../components/Navbar/NavbarApp";
import { useState } from "react";
import BudgetC from "../components/Budget/BudgetC";
import PaymentsTable from "../components/Budget/PaymentsTable";
import ScheduleTable from "../components/Budget/ScheduledPayments";

const Budget = () => {

    const [activeTab, setActiveTab] = useState('presupuesto');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return ( <>
            <div className="w-[100vw] h-[100vh]">
                <div className="md:block relative">
                    <NavbarApp/>
                </div>
                <div className="w-[100%] bg-[#f2f2f2] overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
                    <main className="w-full h-full">
                        <section className="bg-[#f2f2f2] w-full pb-6 pt-2 md:py-0 h-full">
                            <div className="max-w-screen-lg mx-auto inset-x-0 px-2 md:px-0 w-full ">
                                <MinHeader name="Rumba llaneras" category="Cumpleanos"/>
                                <div className="md:w-96 mx-auto inset-x-0 flex my-2 mt-4 rounded-2xl overflow-hidden">
                                    <div onClick={() => handleTabClick('presupuesto')} className={`w-[40%] md:w-[270px] py-1 ${activeTab === 'presupuesto' ? 'bg-[#f7628c] text-white' : 'bg-white text-[#f7628c]'} h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90 capitalize`}>
                                        <p>
                                            Presupuesto
                                        </p>
                                    </div>
                                    <div onClick={() => handleTabClick('pago')} className={`w-[25%] md:w-1/2 py-1 ${activeTab === 'pago' ? 'bg-[#f7628c] text-white' : 'bg-white text-[#f7628c]'} h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90 border-x-2 capitalize`}>
                                        <p>
                                            Pago
                                        </p>
                                    </div>
                                    <div onClick={() => handleTabClick('pago-programado')} className={`w-[40%] md:w-[320px] py-1  ${activeTab === 'pago-programado' ? 'bg-[#f7628c] text-white' : 'bg-white text-[#f7628c]'} h-full grid place-items-center font-display font-medium text-sm cursor-pointer hover:opacity-90`}>
                                        <p>
                                            Pagos programados
                                        </p>
                                    </div>
                                </div>
                                {activeTab === 'presupuesto' && (
                                    <BudgetC/>
                                )}
                                {activeTab === 'pago' && (
                                    <PaymentsTable/>
                                )}
                                {activeTab === 'pago-programado' && (
                                    <ScheduleTable/>
                                )}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
    </> );
}
 
export default Budget;