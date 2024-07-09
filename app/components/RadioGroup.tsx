"use client";
import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
  unitPrice: string;
  isBestDeal?: boolean; // Optional property to indicate the best deal
};

type RadioGroupProps = {
  options: Option[];
  onChange: (value: string) => void;
};

export default function RadioGroup({ options, onChange }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleOptionChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="flex space-x-4 p-4">
      {options.map((option) => (
        <div key={option.value} className="relative min-w-[230px]">
          {option.isBestDeal && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
              BEST DEAL
            </div>
          )}
          <label
            className={`flex flex-col items-start p-4 border-2 rounded-2xl cursor-pointer  ${
              selectedValue === option.value
                ? "border-indigo-600 bg-indigo-50"
                : "border-gray-300 bg-gray-200"
            }`}
            htmlFor={option.value}
          >
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => handleOptionChange(option.value)}
                className="appearance-none w-6 h-6 rounded-full border-2 border-gray-300 checked:border-indigo-600 checked:border-8 checked:bg-white"
                id={option.value}
                aria-label={option.label}
              />
              <div>
                <span className="text-gray-700">{option.label}</span>
                {option.unitPrice && (
                  <div className="text-gray-500 text-xs mt-1">
                    {option.unitPrice}
                  </div>
                )}
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
}
