import React from "react";

interface RadioGroupProps {
  options: {
    value: string;
    label: string;
    discount: string;
    price: string;
    bestDeal?: boolean;
  }[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const RadioGroup = ({ options, selectedOption, onChange }: RadioGroupProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {options.map((option) => (
        <label
          key={option.value}
          className={`relative flex flex-col items-center justify-center m-2 w-[250px] p-4 border rounded-xl cursor-pointer ${
            selectedOption === option.value
              ? "bg-[#ECEBFD] border-[#5B59EF]"
              : "bg-[#DEE2EA] border-[#C0C6D6]"
          }`}
        >
          <input
            type="radio"
            name="radioGroup"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
            className="absolute opacity-0"
          />
          <div>
            <div className="flex items-center">
              <div
                className={`w-[16px] h-[16px] bg-white rounded-full ${
                  selectedOption === option.value ? "ring-8 ring-[#5A58F1]" : ""
                } mr-4`}
              />
              <p className="font-semibold">
                {option.label} {option.discount}
              </p>
            </div>
            <span className="block text-sm font-light py-2">
              {option.price}
            </span>
          </div>
          {option.bestDeal && (
            <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-[#5A58F1] text-xs px-2 py-1 rounded-lg text-white font-[300]">
              BEST DEAL
            </span>
          )}
        </label>
      ))}
    </div>
  );
};
export default RadioGroup;
