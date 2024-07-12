interface RadioButtonProps {
  id: string;
  title: string;
  price: string;
  selected: string;
  onChange: (id: string) => void;
  isBestDeal: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  title,
  price,
  selected,
  onChange,
  isBestDeal,
}) => {
  return (
    <div className="relative w-full md:w-30">
      {isBestDeal && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white py-1 px-2 lg:px-6 rounded-xl">
          BEST DEAL
        </div>
      )}
      <input
        type="radio"
        id={id}
        name="price"
        className="hidden peer"
        checked={selected === id}
        onChange={() => onChange(id)}
      />
      <label
        htmlFor={id}
        className={`flex py-5 gap-4 rounded-xl border-2 hover:bg-opacity-75 ${
          selected === id
            ? "bg-indigo-100 border-indigo-600"
            : "bg-gray-200 border-gray-400"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row items-center relative">
            <div
              className={`w-8 h-8 mx-4 mt-1 border-2 ${
                selected === id
                  ? "border-indigo-700 bg-indigo-700"
                  : "border-gray-400 bg-white"
              } rounded-full flex items-center justify-center`}
            >
              {selected === id && (
                <div className="w-4 h-4 bg-white rounded-full"></div>
              )}
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <p className="ml-16 font-normal">{price}</p>
        </div>
      </label>
    </div>
  );
};
export default RadioButton;
