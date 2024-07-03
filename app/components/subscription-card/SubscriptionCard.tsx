'use client';
interface RoundCheckboxProps {
  checked?: boolean;
  onChange: () => void;
  label?: string;
  price?: string;
  bestDeal?: boolean;
}

const SubscriptionCard: React.FC<RoundCheckboxProps> = ({
  checked = false,
  onChange,
  label,
  price,
}) => {
  return (
    <div
      className={`flex items-center  cursor-pointer bg-backgroundColor border-borderColor border-2 border rounded-2xl h-20 p-4 w-60 ml-4 mt-4 ${
        checked
          ? 'bg-selectedBg border-selectedColor'
          : 'bg-backgroundColor border-borderColor'
      }`}
    >
      <label className='flex cursor-pointer text-lg'>
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
          className='hidden'
        />
        <span
          className={`w-6 h-6 flex items-center justify-center border-2 rounded-full ${
            checked
              ? 'bg-selectedColor border-selectedColor'
              : ' bg-white border-gray-400'
          }`}
        >
          {checked && (
            <span className='w-4 h-4 bg-white border-2 border-selectedColor rounded-full'></span>
          )}
        </span>
        <div className='flex flex-col '>
          {label && <p className='ml-2 font-extra-bold'>{label}</p>}
          {price && <p className='ml-2 font-light text-sm'>{price}</p>}
        </div>
      </label>
    </div>
  );
};

export default SubscriptionCard;
