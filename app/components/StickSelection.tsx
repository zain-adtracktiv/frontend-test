import React, { useState } from "react";
interface StickOption {
  id: string;
  label: string;
  price: string;
  bestDeal: boolean;
}
const SticksSelection = ({ options }: { options: StickOption[] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].id);

  return (
    <fieldset className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 m-5">
      <legend className="sr-only">Select Stick Options</legend>
      {options.map((option) => (
        <div
          key={option.id}
          className={`p-4 border-2 rounded-lg ${
            option.id === selectedOption
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-gray-100"
          } relative`}
        >
          {option.bestDeal && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs rounded-2xl">
              BEST DEAL
            </div>
          )}
          <div className="flex items-center">
            <input
              type="radio"
              name="sticks"
              id={option.id}
              className="form-radio text-blue-600"
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              aria-labelledby={`${option.id}-label`}
            />
            <label
              htmlFor={option.id}
              id={`${option.id}-label`}
              className="ml-2 cursor-pointer"
            >
              <span className="font-semibold text-lg">{option.label}</span>
              <div className="text-sm font-normal text-gray-600">
                {option.price}
              </div>
            </label>
          </div>
        </div>
      ))}
    </fieldset>
  );
};

export default SticksSelection;