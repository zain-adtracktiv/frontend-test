"use client";
import React from "react";

interface PricingOptionProps {
  label: string;
  price: string;
  discount: string;
  bestDeal?: boolean;
  selected: boolean;
  onSelect: () => void;
}

const RadioGroup: React.FC<PricingOptionProps> = ({
  label,
  price,
  discount,
  bestDeal,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center p-6 mx-2 my-4 rounded-[24px] ${
        selected
          ? "bg-purple-100 border-2 border-purple-500"
          : "bg-gray-100 border-2 border-[#C0C6D6]"
      } cursor-pointer w-full sm:w-[90%] md:w-[80%] lg:w-1/3`}
      onClick={onSelect}
    >
      {selected && bestDeal && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 px-4 py-2 rounded-[8px] font-normal text-lg text-white">
          BEST DEAL
        </div>
      )}

      <div className="flex items-center w-[80%]">
        <div
          className={`w-11 h-11 rounded-full border-2 ${
            selected
              ? "border-purple-500 bg-purple-500 flex items-center justify-center"
              : "border-[#C0C6D6]"
          }`}
        >
          {selected && <div className="w-5 h-5 rounded-full bg-white"></div>}
        </div>
        <div className="flex items-center ml-4 font-bold text-black">
          <div className="text-[30px] font-bold text-black">{label}</div>
          <div className="text-[30px] ml-2 ">{discount}</div>
        </div>
      </div>

      <div className="flex items-center w-[80%]">
        <div className="w-6 h-6 rounded-full border-2 invisible"></div>
        <div className="text-[18px] font-normal ml-[2.25rem]">{price}</div>
      </div>
    </div>
  );
};

export default RadioGroup;
