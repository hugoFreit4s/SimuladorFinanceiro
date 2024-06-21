// components/DropdownMenu.tsx
import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
    titleText: string;
    inputPlaceholders: string[];
}

const DropdownMenu: React.FC<DropdownProps> = ({ titleText, inputPlaceholders }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className="inline-block w-full my-5">
            <button 
                onClick={toggleDropdown} 
                className="bg-green-500 text-white py-4 px-6 text-lg border-none cursor-pointer w-full text-left"
            >
                {titleText}
            </button>
            <div 
                className={`flex flex-col overflow-hidden transition-max-height duration-300 ease-in-out w-full`} 
                ref={contentRef} 
                style={{ maxHeight }}
            >
                {inputPlaceholders.map((placeholder, index) => (
                    <input 
                        key={index} 
                        type="text" 
                        placeholder={placeholder} 
                        className="py-3 px-4 my-1 border border-gray-300 box-border w-full" 
                    />
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;