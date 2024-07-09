"use client";

import { MouseEventHandler, useRef, useState } from "react";
import { Item } from "../utils/items";

type RadioItemProps = {
  item: Item;
  isSelected: boolean;
  select: () => void;
};

function RadioItem(props: RadioItemProps) {
  const { item, isSelected, select } = props;

  const { isRecommended = false, qty, title, currency, cost, discount } = item;

  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (inputRef.current) inputRef.current.checked = !isSelected;
    select();
  };

  return (
    <button
      className={`relative flex items-start justify-center gap-x-2 rounded-lg p-4 border-2 focus:outline-[#5a58f1] ${
        isSelected
          ? "border-[#5a58f1] bg-[#ecebfd]"
          : "border-[#c1c7d6] bg-[#dee2ea]"
      }`}
      onClick={clickHandler}
    >
      {/* Best Deal */}
      {isRecommended && (
        <span className="absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] uppercase whitespace-nowrap px-3 bg-[#5a58f1] rounded-lg text-white text-[12px]">
          Best Deal
        </span>
      )}

      {/* Input */}
      <div className="grid place-items-center">
        <input
          type="radio"
          checked={isSelected}
          ref={inputRef}
          disabled
          className={`cursor-pointer peer col-start-1 row-start-1 appearance-none bg-white shrink-0 w-6 h-6 ${
            isSelected
              ? "border-[7px] border-[#5a58f1]"
              : "border-2 border-[#c1c7d6]"
          } rounded-full`}
        />
      </div>

      <div className="flex flex-col items-start justify-center">
        {/* Heading */}
        <span className="text-[18px] font-bold">
          <span>
            {qty} {title}
          </span>
          {discount && (
            <>
              (<span>-{discount}%</span>)
            </>
          )}
        </span>
        {/* Pricing */}
        <span className="text-[16px]">
          {currency}
          {cost}
          {qty === 1 ? "" : "/each"}
        </span>
      </div>
    </button>
  );
}

type RadioGroupProps = {
  items: Item[];
};

function RadioGroup(props: RadioGroupProps) {
  const { items } = props;

  const [selected, setSelected] = useState<number>(items[0].id);

  return (
    <div className="flex items-start justify-start p-5 gap-x-5 font-normal">
      {items.map((item, index) => (
        <RadioItem
          key={index}
          item={item}
          isSelected={item.id === selected}
          select={() => setSelected(item.id)}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
