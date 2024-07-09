"use client";
import React, { useState } from "react";
import { radioData } from "../Store/DummyRadioData";
import RadioItem from "./RadioItem";

const bestDeal = radioData.filter((item) => item?.bestDeal === true)[0];

export interface ISelected {
  description: string;
  label: string;
  bestDeal?: boolean;
  id: number;
}

const RadioGroup = () => {
  const [selected, setSelected] = useState<ISelected>({
    id: bestDeal.id ?? 0,
    label: bestDeal.label ?? "",
    description: bestDeal.description ?? "",
    bestDeal: bestDeal.bestDeal ? bestDeal.bestDeal : false,
  });

  const handleSelect = (data: ISelected) => {
    setSelected({
      id: data.id,
      label: data.label,
      description: data.description,
      bestDeal: data.bestDeal ? data.bestDeal : false,
    });
  };

  return (
    <div className="flex items-center gap-4">
      {radioData.map((item) => (
        <RadioItem
          handleChange={handleSelect}
          selected={selected.id === item.id ? true : false}
          description={item.description}
          label={item.label}
          id={item.id}
          key={item.id}
          bestDeal={item.bestDeal ?? false}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
