"use client";
import React, { useState } from "react";
import RadioGroupComponent from "@/components/RadioGroupComponent";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize activeIndex with 0

  const handleRadioGroupClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-10 text-xl gap-8 font-bold p-6 flex flex-col md:p-5 lg:flex-row lg:gap-3">
      <RadioGroupComponent
        selectionActiveTitle="BEST DEAL"
        dealDetails="3 Sticks (-32%)"
        dealPricingPerItem="$64/each"
        isActive={activeIndex === 0}
        onClick={() => handleRadioGroupClick(0)}
      />
      <RadioGroupComponent
        selectionActiveTitle="NORMAL"
        dealDetails="2 Sticks (-22%)"
        dealPricingPerItem="$71/each"
        isActive={activeIndex === 1}
        onClick={() => handleRadioGroupClick(1)}
      />
      <RadioGroupComponent
        selectionActiveTitle="STANDARD"
        dealDetails="1 Sticks (-15%)"
        dealPricingPerItem="$75/each"
        isActive={activeIndex === 2}
        onClick={() => handleRadioGroupClick(2)}
      />
    </div>
  );
}
