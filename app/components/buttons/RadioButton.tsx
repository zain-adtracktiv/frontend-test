import React, { useMemo } from 'react'

type ItemType = {
    id: number, count: number, percent: number, isBestDeal: boolean, eachPrice: number
}
type PropsType = {
    item: ItemType, name: string, activeRadio: number, setActiveRadio: (count: number) => void
}

export default function RadioButton({ item, name, activeRadio, setActiveRadio }: PropsType) {
    const { count, percent, isBestDeal, eachPrice } = item
    const isOne = useMemo(() => (count).toString().split('')[count.toString().length - 1], [count])

    return (
        <div className='relative'>
            {isBestDeal && <div className='absolute t-0 l-0 w-full'>
                <div className='w-max m-auto bg-indigo-500 uppercase text-[0.65rem] font-normal text-white px-2 leading-6 rounded-lg'>Best deal</div>
            </div>}
            <div className='w-max mt-3 border-gray-300 border-2 bg-gray-200 rounded-xl cursor-pointer' onClick={() => setActiveRadio(count)}>
                <div className='flex gap-2 p-4'>
                    <input type='radio' name={name} className={`w-6 h-6 appearance-none border-2 border-gray-300 bg-white rounded-full shrink-0 ${count === activeRadio ? 'border-8 border-indigo-500' : 'border-2 border-gray-300'}`} />
                    <label htmlFor={name}>
                        <div className='text-sm'>{count} {isOne === "1" ? "Stick" : "Sticks"} (-{percent}%)</div>
                        <div className='text-xs font-normal	'>${eachPrice.toFixed(2)}/each</div>
                    </label>
                </div>
            </div>
        </div>
    )
}
