"use client"

import React, { FC, useState, useEffect, ReactNode } from 'react'

const RadioGroup: FC<{radioContent: Array<{ mainLabel: string, priceString: string, bestDeal: boolean, optionName: string }>}> = ({ radioContent }) => {
  const [selectedRadio, setSelectedRadio] = useState<string>('')

  useEffect(() => {
    for(let i = 0; i < radioContent.length; i++) { if (radioContent[i].bestDeal) { setSelectedRadio(radioContent[i].optionName) }; break; }
  }, [])
  
  function renderRadios(): ReactNode {
    return radioContent.map((item) => (
      <div key={item.optionName} onClick={() => (setSelectedRadio(item.optionName))} className="flex flex-col justify-center items-center cursor-pointer">
        {selectedRadio === item.optionName ? (
          <>
            {item.bestDeal ? <div className="relative rounded-lg py-[3px] px-[8px] bg-[#504eef] text-white text-center text-[8px] uppercase mb-[-10px]">Best Deal</div> : <></>}
            <div className="w-[230px] border-solid border-[2px] border-[#504eef] rounded-[15px] p-[20px] flex flex-row gap-x-[10px] justify-center items-start bg-[#ecebfe]">
              <span className="rounded-full w-[30px] h-[30px] p-[7px] bg-white border-[#5a58f2] border-[10px]" />
              <div className='flex flex-col justify-center items-start gap-y-[8px]'>
                <label className="text-black font-sans text-[20px] font-bold whitespace-nowrap">{item.mainLabel}</label>
                <p className="text-black font-sans text-[12px] whitespace-nowrap">{item.priceString}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {item.bestDeal ? <div className="rounded-lg py-[3px] px-[8px] bg-[#b4bbce] text-black text-center text-[8px] uppercase relative mb-[-10px]">Best Deal</div> : <></>}
            <div className="w-[230px] border-solid border-[2px] border-[#b4bbce] rounded-[15px] p-[20px] flex flex-row gap-x-[10px] justify-center items-start bg-[#dee2ea]">
              <span className="rounded-full w-[30px] h-[30px] p-[8px] bg-white border-[#b4bbce] border-[2px]" />
              <div className='flex flex-col justify-center items-start gap-y-[8px]'>
                <label className="text-black font-sans text-[20px] font-bold whitespace-nowrap">{item.mainLabel}</label>
                <p className="text-black font-sans text-[12px] whitespace-nowrap">{item.priceString}</p>
              </div>
            </div>
          </>
        )}
      </div>
    ))
  }

  return (
    <div className="flex flex-row gap-x-4 justify-center items-center">{renderRadios()}</div>
  )
}

export default RadioGroup