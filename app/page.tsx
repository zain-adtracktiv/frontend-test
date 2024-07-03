"use client";

import React from "react";
import RadioGroup from "./components/RadioGroup/RadioGroup";

const options = [
  { label: "3 Sticks", subtitle: "64.00/each", discount: 32 },
  { label: "2 Sticks", subtitle: "71.00/each", discount: 22 },
  { label: "1 Stick", subtitle: "75.00", discount: 15 },
];

export default function Home() {
  const handleRadioChange = (selectedOption: number) => {
    console.log("Selected option:", options[selectedOption]);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Choose Your Plan
        </h1>
        <RadioGroup
          options={options}
          onChange={handleRadioChange}
          name="subscription-plan"
          legend="Subscription Plan Options"
        />
      </div>
    </main>
  );
}
