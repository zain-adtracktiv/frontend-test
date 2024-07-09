"use client";
import React, { useState } from "react";

interface Option {
  id: number;
  label: string;
  price: string;
  bestDeal?: boolean;
}

const RadioGroup: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options: Option[] = [
    { id: 1, label: "3 Sticks (-32%)", price: "$64.00/each", bestDeal: true },
    { id: 2, label: "2 Sticks (-22%)", price: "$71.00/each" },
    { id: 3, label: "1 Stick (-15%)", price: "$75.00" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {options.map((option) => (
        <div
          key={option.id}
          className={`relative border p-4 rounded-lg cursor-pointer flex items-center space-x-2 ${
            selectedOption === option.id
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 bg-gray-200"
          }`}
          onClick={() => setSelectedOption(option.id)}
        >
          {option.bestDeal && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white bg-blue-500 px-2 py-1 text-xs font-bold rounded-full">
              BEST DEAL
            </div>
          )}
          <div
            className={`w-4 h-4 border rounded-full flex items-center justify-center ${
              selectedOption === option.id
                ? "bg-blue-500 border-blue-500"
                : "bg-white border-gray-300"
            }`}
          >
            {selectedOption === option.id && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </div>
          <div>
            <div className="font-bold">{option.label}</div>
            <div className="text-gray-500">{option.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
