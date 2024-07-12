"use client"
import React, { useState } from 'react';

interface Option {
  id: string;
  label: string;
  price: string;
  discount: string;
  bestDeal?: boolean;
}

interface RadioGroupProps {
  options: Option[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.id} className={`flex flex-col items-center p-4 border rounded-lg ${selected === option.id ? 'border-blue-500' : 'border-gray-300'}`}>
          <input
            type="radio"
            name="sticks"
            value={option.id}
            checked={selected === option.id}
            onChange={() => setSelected(option.id)}
            className="hidden"
          />
          <div className={`flex items-center justify-center w-6 h-6 rounded-full border ${selected === option.id ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
            {selected === option.id && <div className="w-3 h-3 bg-white rounded-full"></div>}
          </div>
          <div className="mt-2 text-sm font-semibold">{option.label}</div>
          <div className="mt-1 text-sm text-gray-500">{option.discount}</div>
          <div className="mt-1 text-lg font-bold">{option.price}</div>
          {option.bestDeal && <div className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">BEST DEAL</div>}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
