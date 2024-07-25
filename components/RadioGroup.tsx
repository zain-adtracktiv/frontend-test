"use client";

import { useState } from "react";
import { RadioButton } from "./RadioButton";

export const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const clickHandler = (value: string) => {
    setSelectedValue(value);
  };
  
  return <div className="w-full p-4 flex">
    <RadioButton label1="3 Sticks (-32%)" bestDeal={true} label2="$64.00/each" value="1" selectedValue={selectedValue} onClick={clickHandler}/>
    <RadioButton label1="2 Sticks (-22%)" label2="$71.00/each" value="2" selectedValue={selectedValue} onClick={clickHandler}/>
    <RadioButton label1="1 Stick (-15%)" label2="$75.00/each" value="3" selectedValue={selectedValue} onClick={clickHandler}/>
  </div>;
};
