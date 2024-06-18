'use client'

import React, { Children, createContext, useContext, useState, ReactNode } from 'react';

interface DisableProviderProps {
    children: ReactNode;
};

const DisableContext = createContext<{ isDisabled: boolean; setIsDisabled: React.Dispatch<React.SetStateAction<boolean>> } | undefined>(undefined);

export const DisableProvider: React.FC<DisableProviderProps> = (props: DisableProviderProps ) => {
    const [isDisabled, setIsDisabled] = useState(false);

    return(
        <DisableContext.Provider value={{isDisabled, setIsDisabled }}>
            {props.children}
        </DisableContext.Provider>
    );
};

export const useDisable = () => {
    return useContext(DisableContext);
};