"use client";

import Link from "next/link";
import { useState } from "react";
import {  FaChevronUp, FaClipboardList, FaSun } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { ImCalculator } from "react-icons/im";
import { IoBalloon } from "react-icons/io5";

const NavbarDown = () => {

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    return ( <>
        <div className="w-full flex justify-center relative">
            <ul className="flex flex-col md:hidden mb-12 bg-white z-50 rounded-t-2xl Shadow w-full fixed bottom-0 transition duration-300 ease-in-out translate-y-[54px]">
                <div className="w-full grid grid-cols-6 py-5 place-items-center">
                    <div onClick={()=> handleActive()} className="w-9 h-9 flex items-center justify-center absolute z-[90] top-0 -translate-y-1/2 rounded-full bg-white shadow-sm text-gray-600 text-[#1ca6af]">
                        <FaChevronUp className="w-6 h-6 rotate-180 text-[#1ca6af] transition duration-500 ease-in-out scale-y-[-1]"/>
                    </div>
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <IoBalloon className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <FaClipboardList className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <HiUsers className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <FaSun className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <FaGift className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <ImCalculator className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                </div>
                {active && (
                    <div className="w-full grid grid-cols-6 pt-1 pb-5 place-items-center">
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <ImCalculator className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                    <li className="cursor-pointer transition text-primary hover:scale-[115%] hover:opacity-100 opacity-70">
                        <ImCalculator className="w-8 h-8 text-[#1ca6af]" />
                        <Link href="/organizador-app">
                        
                        </Link>
                    </li>
                </div>
                )}
            </ul>
        </div>
    </> );
}
 
export default NavbarDown;