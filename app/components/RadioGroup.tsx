"use client"
import { useState } from "react";
import RadioButton from "./buttons/RadioButton";

export default function ButtonContainer() {
    const [activeRadio, setActiveRadio] = useState(3);
    const state = [
        { id: 1, count: 3, percent: 32, isBestDeal: true, eachPrice: 64 },
        { id: 2, count: 2, percent: 22, isBestDeal: false, eachPrice: 71 },
        { id: 3, count: 1, percent: 15, isBestDeal: false, eachPrice: 75 }
    ]
    return (
        <div className="flex flex-wrap items-center gap-4 m-4">
            {state.map(item =>
                <RadioButton key={item.id} item={item} name="example" activeRadio={activeRadio} setActiveRadio={setActiveRadio} />
            )}
        </div>
    )
}
