interface RadioButtonProps {
  label1: string;
  label2: string;
  bestDeal?: boolean;
  value: string;
  selectedValue: string;
  onClick: (value: string) => void;
}

export const RadioButton = ({
  label1,
  label2,
  bestDeal = false,
  value,
  selectedValue,
  onClick,
}: RadioButtonProps) => {
  const isSelected = selectedValue === value;

  return (
    <div className="relative flex w-64 p-2" onClick={() => onClick(value)}>
      <div className={`absolute px-4 py-1 left-[30%] -top-1.5 text-white rounded-xl font-normal text-sm items-center ${ bestDeal ? "visible" : "hidden"} ${isSelected ? "bg-indigo-500" : "bg-gray-400"}`}> BEST DEAL </div>
      <input
        type="radio"
        id={`sticks-${value}`}
        value={value}
        checked={isSelected}
        className="hidden peer"
      />
      <label
        htmlFor={`sticks-${value}`}
        className="group peer-checked:group inline-flex items-start w-full p-4 py-5 text-black bg-gray-200 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-300 peer-checked:bg-indigo-100 peer-checked:border-indigo-500"
      >
        <div
          className={`size-7 rounded-full bg-white border-2 ${
            isSelected ? "border-8 border-indigo-500" : "border-gray-300"
          }`}
        ></div>
        <div className="block px-2">
          <div className="text-xl font-bold"> {label1} </div>
          <div className="text-sm font-medium"> {label2} </div>
        </div>
      </label>
    </div>
  );
};
