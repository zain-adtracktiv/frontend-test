"use client";

import React, { useState } from "react";

interface RadioGroupProps {
  options: { label: string; subtitle: string; discount: number }[];
  onChange: (selectedOption: number) => void;
  name: string; // Add a name prop for the radio group
  legend: string; // Add a legend prop for the fieldset
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  onChange,
  name,
  legend,
}) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (index: number) => {
    setSelectedOption(index);
    onChange(index);
  };

  return (
    <fieldset className="flex gap-8 border-0 p-0 m-0">
      <legend className="sr-only">{legend}</legend>
      {options.map((option, index) => (
        <div
          key={index}
          className={`relative flex flex-col gap-2 rounded-lg border-2 py-4 px-8 ${
            selectedOption === index
              ? "border-[#5A58F1] bg-[#F0F0FF]"
              : "border-gray-300 bg-[#DEE2EA]"
          }`}
        >
          {selectedOption === index && (
            <div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#5A58F1] text-white px-2 py-1 rounded-full text-xs uppercase"
              aria-hidden="true"
            >
              Best Deal
            </div>
          )}
          <label className="flex items-center gap-2 w-[max-content] cursor-pointer">
            <input
              type="radio"
              name={name}
              value={index}
              checked={selectedOption === index}
              onChange={() => handleChange(index)}
              className="appearance-none w-8 h-8 rounded-full border-2 border-gray-300 checked:border-[#5A58F1] checked:border-8 checked:bg-white"
              aria-describedby={`option-${index}-subtitle`}
            />
            <span className="font-bold text-xl">{option.label}</span>
            <span
              className="text-gray-500 text-sm"
              aria-label={`${option.discount}% discount`}
            >
              (-{option.discount}%)
            </span>
          </label>
          <span
            id={`option-${index}-subtitle`}
            className="text-gray-700 text-sm pl-5"
          >
            {option.subtitle}
          </span>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioGroup;
