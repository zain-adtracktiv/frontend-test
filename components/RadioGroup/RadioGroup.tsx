interface Option {
  label: string;
  value: string;
  price: string;
  badge?: string;
}

interface RadioGroupProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div
      className="flex space-x-4"
      role="radiogroup"
      aria-labelledby="radio-group-label"
    >
      {options.map((option) => (
        <div
          key={option.value}
          className={`relative cursor-pointer p-4 rounded-lg ${
            value === option.value
              ? "border-2 border-blue-500 bg-blue-50"
              : "bg-gray-200"
          }`}
        >
          <input
            type="radio"
            id={option.value}
            name="radio-group"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <label
            htmlFor={option.value}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div
              className={`w-5 h-5 border-2 rounded-full ${
                value === option.value
                  ? "border-blue-600 bg-blue-600"
                  : "border-gray-400"
              }`}
            >
              {value === option.value && (
                <div className="w-2 h-2 bg-white rounded-full ml-[4px] mt-[4px]"></div>
              )}
            </div>
            <div>
              <span className="font-semibold">{option.label}</span>
              <div className="text-sm text-gray-600">{option.price}</div>
            </div>
          </label>
          {option.badge && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs py-1 px-2 rounded-full">
              {option.badge}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
