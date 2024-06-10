import { on } from 'events';
import React from 'react';

interface InputsProps {
    type: string;
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ type, label, onChange, value }) => {
    return (
        <div className="flex flex-col w-full font-light">
            <div className="flex flex-col self-center">
                <label className="font-mono text-lg self-left">{label}</label>
                <input
                    type = {type}
                    value = {value}
                    onChange = {onChange}
                    placeholder="exemplo@dominio.com.br"
                    className="w-full px-1 placeholder:text-left placeholder:px-1 text-black rounded-md lg:text-md lg:w-full lg:placeholder:text-xs"
                />
            </div>
            <div className="flex flex-col self-center">
                <label className="font-mono text-lg self-left mt-6">Senha</label>
                <input type="password" placeholder="Insira sua senha..." className="w-full px-1 placeholder:text-left placeholder:px-1 text-black rounded-md lg:text-md lg:w-full lg:placeholder:text-xs"></input>
            </div>
            <button className="mt-6 border-solid border-2 border-[#00A295] w-[140px] p-2 rounded-md hover:bg-[#00A295] self-center">LOGAR</button>
        </div>
    )
}

export default Inputs;