import React from "react";

interface CheckSimulationProps {
    isDisabled: boolean;
    onChange: (isChecked: boolean) => void;
}

const CheckSimulation: React.FC<CheckSimulationProps> = (checkboxprops: CheckSimulationProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        checkboxprops.onChange(event.target.checked);
    };

    return (
        <div className="flex align-center items-center self-left my-3">
            <label htmlFor="isSimulated?" className="text-[#FFFFFF] mr-3">Não desejo simular esta estapa</label>
            <input type="checkbox" className="lg:cursor-pointer" checked={checkboxprops.isDisabled} onChange={handleChange}/>
        </div>
    )
}

export default CheckSimulation;