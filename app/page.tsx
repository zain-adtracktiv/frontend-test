"use client";

import { useState } from "react";
import RadioGroup from "./components/RadioGroup";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("3");

  const options = [
    {
      value: "3",
      label: "3 Sticks",
      discount: "(-32%)",
      price: "$64.00/each",
      bestDeal: true,
    },
    { value: "2", label: "2 Sticks", discount: "(-22%)", price: "$71.00/each" },
    { value: "1", label: "1 Stick", discount: "(-15%)", price: "$75.00" },
  ];

  return (
    <div className="text-xl font-bold h-screen w-screen flex items-center justify-center">
      <RadioGroup
        options={options}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
}
