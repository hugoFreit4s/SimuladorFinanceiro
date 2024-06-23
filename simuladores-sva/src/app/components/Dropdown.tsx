// components/DropdownMenu.tsx
import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
    titleText: string;
    items: Array<{
        type: 'input' | 'card';
        title: string;
        placeholder?: string;
        content?: string;
    }>;
}

const DropdownMenu: React.FC<DropdownProps> = ({ titleText, items }) => {
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
        <div className="flex flex-col self-center justify-center w-[80%] my-5">
            <button
                onClick={toggleDropdown}
                className="bg-[#00A099] rounded-md text-white py-1 px-2 text-lg border-none cursor-pointer text-left hover:bg-[#10B0A9]"
            >
                {titleText}<span className='mr-7'>&darr;</span>
            </button>
            <div
                className={`flex flex-col overflow-hidden transition-max-height duration-300 ease-in-out w-full`}
                ref={contentRef}
                style={{ maxHeight }}
            >
                {items.map((item, index) => (
                    <div key={index} className="my-2">
                        {item.type === 'input' && (
                            <React.Fragment>
                                <label className="block text-left mb-1 text-white text-xs lg:text-base">{item.title}</label>
                                <input
                                    type="number"
                                    placeholder={item.placeholder}
                                    className="bg-[#7DB61C] text-white py-1 px-4 w-full text-base text-center rounded-md placeholder:text-xs lg:placeholder:text-base placeholder:text-center placeholder:text-white"
                                />
                            </React.Fragment>
                        )}
                        {item.type === 'card' && (
                            <React.Fragment>
                                <label className="block text-left mb-1 text-white text-xs lg:text-base">{item.title}</label>
                                <div className="p-1 w-full rounded-md bg-[#7DB61C]">
                                    <p className="text-center text-white text-xs lg:text-base">{item.content}%</p>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;