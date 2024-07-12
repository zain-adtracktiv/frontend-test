"use client";
import RadioGroup, { optionsProps } from "@/components/ui/radio-group";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState<string>();

  return (
    <div className="flex items-center justify-center h-[100dvh] w-[100dvw]">
      <form className="flex gap-2">
        <RadioGroup
          options={options}
          name="discount"
          selected={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
    </div>
  );
}

const options: optionsProps[] = [
  {
    best: true,
    rate: 64,
    amount: 3,
    discountPercentage: 32,
  },
  {
    rate: 71,
    amount: 2,
    discountPercentage: 22,
  },
  {
    rate: 75,
    amount: 1,
    discountPercentage: 15,
  },
];
