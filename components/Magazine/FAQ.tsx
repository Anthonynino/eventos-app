"use client";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Faq = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return ( <>
        <div className="w-full">
            <div onClick={toggleAccordion} className="text-gray-500 p-3 bg-[#f2f2f2] rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-100 transition">
                <h2 className="text-gray-500 text-sm transition capitalize">
                    Que otros productos ofrece?
                </h2>
                <FaChevronRight className={`transform w-6 h-6 text-[#1ca6af] transition ${isOpen ? 'rotate-90' : ''}`}/>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-40 overflow-visible' : 'max-h-0'}`}>
                <div className="accordion-content text-sm p-3">
                    Zapatos, Sillas, Perros, Gatos, etc.
                </div>
            </div>
        </div>
    </> );
}
 
export default Faq;