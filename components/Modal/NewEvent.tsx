import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        
        <div className=" bg-white w-full sm:w-1/3 lg:w-1/3 z-[60] fixed top-0 left-0 h-full md:rounded-r-2xl shadow-lg flex flex-col items-center justify-center transform transition duration-300 translate-x-0 ">
            <style jsx global>{`
                    body {
                        overflow: hidden;
                    }
                    body::before {
                        content: '';
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(40, 40, 40, 0.8);
                        backdrop-filter: blur(2px);
                        z-index: 50;
                    }
                `}</style>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-[#f2f2f2] w-10 h-10 rounded-full">
                X
            </button>
            <div className=' flex w-full items-start p-12 overflow-auto'>
                {children}
            </div>
        </div>
    );
};

export default Modal;