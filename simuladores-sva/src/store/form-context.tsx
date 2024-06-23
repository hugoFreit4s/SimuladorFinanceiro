'use client'
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface FormProviderProps {
    children: ReactNode;
};

export const formContext = createContext<{ nome: string; setNome: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);

export default function FormProvider({children}: FormProviderProps) {
    const [nome, setNome] = useState(localStorage.getItem("nome") ?? "");
    const [idade, setIdade] = useState("")

    useEffect(() => {
        localStorage.setItem("nome", nome);
    }, [nome])

    useEffect(() => {
        localStorage.setItem("idade", idade);
    }, [idade])

    return(
        <formContext.Provider value={{nome, setNome}}>
            {children}
        </formContext.Provider>
    );
};

// export const useDisable = () => {
//     return useContext(formContext);
// };