import { ComponentProps } from "react";

export interface optionsProps {
  best?: boolean;
  amount: number;
  discountPercentage: number;
  rate: number;
}

export interface RadioPropsType extends ComponentProps<"input"> {
  options?: optionsProps[];
  selected?: any;
  readonly?: boolean;
}

function RadioGroup({
  name,
  onChange,
  required = false,
  options = [],
  selected,
  disabled = false,
  readOnly = false,
  ...props
}: RadioPropsType) {
  return (
    <div className="flex gap-2">
      {options.map((option, index) => (
        <label
          key={index}
          className={`relative block py-4 px-6 border-[1px] bg-gray-100 rounded-lg cursor-pointer ${
            selected != option.amount ? "border-gray-300" : "border-blue-600"
          }`}
        >
          <input
            type="radio"
            disabled={disabled}
            name={name}
            checked={selected == option.amount}
            onChange={onChange}
            value={option.amount}
            className="hidden"
            {...props}
          />
          {option.best && (
            <div className="absolute left-[50%] top-[-16px] translate-x-[-50%] uppercase text-white text-sm bg-blue-600 rounded-md px-3 py-1">
              Best Deal
            </div>
          )}
          <div className="flex items-start gap-4">
            <div>
              <div
                className={`rounded-full bg-white h-[30px] w-[30px] ${
                  selected == option.amount
                    ? "border-blue-600 border-[6px]"
                    : "border-gray-400 border-[1px]"
                }`}
              ></div>
            </div>

            <div className="flex flex-col gap-2">
              <strong className="text-lg">
                {option.amount} Sticks (-{option.discountPercentage}%)
              </strong>
              <small className="text-md leading-3">
                ${String(option.rate).padStart(2, "0")}/each
              </small>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;
