// RadioGroup.tsx
import React, { useState } from 'react';

interface Option {
  id: number;
  label: string;
  price: string;
  bestDeal?: boolean;
}

const RadioGroup: React.FC<{ options: Option[] }> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <div className="flex justify-center space-x-4">
      {options.map((option) => (
        <div
          key={option.id}
          className={`relative border p-4 rounded-lg cursor-pointer flex items-start space-x-2 ${
            selectedOption === option.id ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-200'
          }`}
          onClick={() => handleSelect(option.id)}
        >
          {option.bestDeal && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white bg-blue-500 px-3 py-1 text-xs font-semiBold rounded-full">
              BEST DEAL
            </div>
          )}
          <div
            className={`w-8 h-8 border rounded-full flex items-center justify-center mt-1 ${
              selectedOption === option.id ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
            }`}
          >
            {selectedOption === option.id && <div className="w-4 h-4 bg-white rounded-full"></div>}
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-lg">{option.label}</div>
            <div className="text-sm text-gray-700">{option.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
