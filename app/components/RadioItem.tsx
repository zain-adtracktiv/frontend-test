"use client";
const RadioItem = ({ option, selectedValue, onChange }) => {
  return (
    <label
      key={`${option.value}`}
      className={`flex relative cursor-pointer gap-2 border-2 rounded-2xl p-4 py-5 pr-8
            ${
              selectedValue === option.value
                ? "bg-[#ECEBFE] border-[#4745EE]"
                : "bg-[#DEE2EA] border-[#B7BED0]"
            }
          `}
    >
      <input
        type="radio"
        name="item"
        value={option.value}
        checked={selectedValue === option.value}
        onChange={() => onChange(option.value)}
        className="hidden"
        aria-labelledby={`label-${option.value}`}
      />
      <span
        className={`size-7 bg-white rounded-full
              ${
                selectedValue === option.value
                  ? "border-[#5A58F2] border-[8px]"
                  : "border-[#B7BED0] border"
              }
            `}
      ></span>
      <div className="flex flex-col">
        <span className="text-[#14181F] font-bold text-xl">{option.label}</span>
        <span className="text-[#262A32] text-sm">
          ${option.value}
          {option.isEach && "/each"}
        </span>
      </div>
      {option.isBestDeal && (
        <div className="absolute text-white text-sm uppercase bg-[#5A58F2] rounded-xl p-3.5 py-1 w-fit -top-4 mx-auto left-0 right-0">
          Best Deal
        </div>
      )}
    </label>
  );
};

export default RadioItem;
