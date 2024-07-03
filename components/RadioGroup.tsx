
'use client'

import { useCallback, useState } from "react";
import Radio from "./Radio"
import { IRadioProps } from "./Radio"

export interface IRadioGroup {
    items: IRadioProps[];
}

const RadioGroup = ({items}: IRadioGroup) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const handleSelect = useCallback((index: number) => {
        setSelectedIndex(index)
    }, [setSelectedIndex]) 

    return (
        <>
            <div className="flex gap-5">
                {items.map((item, index) => (<Radio label={item.label} description={item.description} selected={selectedIndex == index} index={index} handleSelect={handleSelect} />))}
            </div>
        </>
    )
}

export default RadioGroup