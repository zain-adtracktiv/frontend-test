"use client";
import React, { useState } from "react";
import PricingOption from "./components/RadioGroup";
export default function Home() {
  const [selectedOption, setSelectedOption] = useState<number>(3);
  return (
    <div className="text-xl font-bold">
      <div className="flex flex-col lg:flex-row justify-center items-center p-4">
        <PricingOption
          label="3 Sticks"
          price="$64.00/each"
          discount="(-32%)"
          bestDeal={true}
          selected={selectedOption === 3}
          onSelect={() => setSelectedOption(3)}
        />
        <PricingOption
          label="2 Sticks"
          price="$71.00/each"
          discount="(-22%)"
          selected={selectedOption === 2}
          onSelect={() => setSelectedOption(2)}
        />
        <PricingOption
          label="1 Stick"
          price="$75.00"
          discount="(-15%)"
          selected={selectedOption === 1}
          onSelect={() => setSelectedOption(1)}
        />
      </div>
    </div>
  );
}
