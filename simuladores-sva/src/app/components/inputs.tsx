import { on } from 'events';
import React from 'react';

interface InputsProps {
    type: string;
    value: string;
    label: string;
    placeholdertxt: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ type, label, onChange, value, placeholdertxt }) => {
    return (
        <div className="flex flex-col w-full font-light">
            <div className="flex flex-col self-center">
                <label className="font-mono text-lg self-left">{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholdertxt}
                    className="w-full px-1 placeholder:text-left placeholder:px-1 text-black rounded-md lg:text-md lg:w-full lg:placeholder:text-xs"
                />
            </div>
        </div>
    )
}

export default Inputs;