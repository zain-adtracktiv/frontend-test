"use client";

interface RadioOption {
  value: number;
  label: string;
  each?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue: number;
  onChange: (value: number) => void;
  bestDealLabel?: string;
  customStyles?: {
    container?: string;
    optionContainer?: string;
    radioButton?: string;
    selectedRadioButton?: string;
    label?: string;
    price?: string;
    bestDealTag?: string;
  };
}

const RadioGroup = ({
  options,
  name,
  selectedValue,
  onChange,
  bestDealLabel = "Best Deal",
  customStyles = {},
}: RadioGroupProps) => {
  const lowestPriceOption = options.reduce((prev, current) =>
    current.value < prev.value ? current : prev
  );

  return (
    <div className={`flex gap-4 flex-wrap ${customStyles.container ?? ""}`}>
      {options.map((option) => (
        <label
          key={`${option.value}`}
          className={`
            flex relative cursor-pointer gap-2 border-2 rounded-2xl p-4 py-5 pr-8
            ${
              selectedValue === option.value
                ? "bg-[#ECEBFE] border-[#4745EE]"
                : "bg-[#DEE2EA] border-[#B7BED0]"
            }
            ${customStyles.optionContainer ?? ""}
          `}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
            aria-labelledby={`label-${option.value}`}
          />
          <span
            className={`
              size-7 bg-white rounded-full
              ${
                selectedValue === option.value
                  ? "border-[#5A58F2] border-[8px]"
                  : "border-[#B7BED0] border"
              }
              ${customStyles.radioButton ?? ""}
              ${
                selectedValue === option.value
                  ? customStyles.selectedRadioButton ?? ""
                  : ""
              }
            `}
          ></span>
          <div className="flex flex-col">
            <span
              className={`text-[#14181F] font-bold text-xl ${
                customStyles.label ?? ""
              }`}
            >
              {option.label}
            </span>
            <span
              className={`text-[#262A32] text-sm ${customStyles.price ?? ""}`}
            >
              ${option.value}
              {option.each && "/each"}
            </span>
          </div>
          {option === lowestPriceOption && (
            <div
              className={`
                absolute text-white text-sm uppercase bg-[#5A58F2] rounded-xl p-3.5 py-1 w-fit -top-4 mx-auto left-0 right-0
                ${customStyles.bestDealTag ?? ""}
              `}
            >
              {bestDealLabel}
            </div>
          )}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
