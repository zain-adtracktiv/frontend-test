'use client'

import { useState } from "react";

export interface IRadioProps {
    label: string;
    description: string;
    selected?: boolean;
    index?: number;
    handleSelect?: (index: number) => void
}

const Radio = ({label, description, selected, handleSelect, index}: IRadioProps) => {

    const handleOnClick = () => {
        if(handleSelect) {
            handleSelect(index as number)
        }
    }

    return (
        <>
            <div className={`border-2 p-6 relative rounded-3xl ${selected ? 'border-primary': 'border-secondary'} w-90 h-35`}>
                {selected && <div className="absolute flex -top-6 left-25 h-12 w-40 bg-primary rounded-2xl font-medium text-lg">
                    <span className="m-auto text-white">
                        BEST DEAL
                    </span>
                </div>}
                <div className="mt-2 ">
                    <div className="flex gap-x-4">
                        <div onClick={handleOnClick} className={`${selected ? 'border-12 border-primary' : 'border-2 border-secondary'} cursor-pointer rounded-full w-11 h-11`}></div>
                        <div>
                            <div className="mt-1 text-3xl font-extrabold">{label}</div>
                            <div className="mt-3 text-xl">{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Radio