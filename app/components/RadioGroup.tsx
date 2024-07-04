"use client";

import RadioItem from "@/app/components/RadioItem";

interface RadioOption {
  value: number;
  label: string;
  each?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: number;
  onChange: (value: number) => void;
}

const RadioGroup = ({ options, selectedValue, onChange }: RadioGroupProps) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {options.map((option, index) => (
        <RadioItem
          key={`${option.value}-${index}`}
          option={option}
          onChange={onChange}
          selectedValue={selectedValue}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
