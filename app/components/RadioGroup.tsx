import React from 'react'

interface RadioOption {
  label: string
  value: string
  price: string
  bestDeal?: boolean
}

interface RadioGroupProps {
  options: RadioOption[]
  name: string
  selectedValue: string
  onChange: (value: string) => void
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div
      role='radiogroup'
      aria-labelledby={`${name}-label`}
      className='flex items-center'
    >
      {options.map((option) => (
        <label
          key={option.value}
          className={`relative inline-flex rounded-xl border border-gray-300 mr-3 mb-3 p-4 cursor-pointer ${
            selectedValue === option.value
              ? 'bg-custom-violet/10 border-custom-violet'
              : 'bg-slate-100'
          }`}
        >
          <input
            type='radio'
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e.target.value)}
            className='hidden'
            aria-hidden='true'
          />
          <span
            className={`inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 ${
              selectedValue === option.value
                ? 'bg-custom-violet border-custom-violet'
                : 'bg-white'
            }`}
          >
            {selectedValue === option.value && (
              <span className='w-2 h-2 rounded-full bg-white' />
            )}
          </span>
          <div className='ml-2'>
            <h1 className='text-black font-bold flex items-center'>
              {option.label}
              {option.bestDeal && (
                <span className='absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 text-xs font-normal text-white bg-custom-violet rounded-lg uppercase'>
                  Best Deal
                </span>
              )}
            </h1>
            <p className='text-gray-500 text-xs'>{option.price}/each</p>
          </div>
        </label>
      ))}
    </div>
  )
}

export default RadioGroup
