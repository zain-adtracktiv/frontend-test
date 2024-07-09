"use client";

import { ISelected } from "./RadioGroup";
export interface IRadioItemProps {
  description: string;
  label: string;
  bestDeal?: boolean;
  id: number;
  selected: boolean;
  handleChange: (data: ISelected) => void;
}

const RadioItem = ({
  description,
  label,
  bestDeal = false,
  id,
  selected = false,
  handleChange,
}: IRadioItemProps) => {
  return (
    <div
      onClick={() => {
        handleChange({ description, label, bestDeal, id });
      }}
      className="cursor-pointer"
    >
      <div
        className={`border-2 ${
          selected
            ? "border-primary bg-primaryBg "
            : "border-secondaryBorder bg-secondaryBg"
        }  relative rounded-xl px-4 flex items-center w-64 h-24`}
      >
        {bestDeal && (
          <div
            className={`absolute bg-primary text-white flex -top-4 left-14 h-8 w-32 rounded-xl`}
          >
            <span className="m-auto text-sm font-medium">BEST DEAL</span>
          </div>
        )}
        <div className="flex gap-x-4">
          <div
            className={`${
              selected
                ? "flex items-center justify-center bg-primary"
                : "border border-secondaryBorder bg-white"
            }   rounded-full w-8 h-8`}
          >
            {selected && <span className="w-4 h-4 rounded-full bg-white" />}
          </div>
          <div>
            <p className="m-0 text-xl font-bold">{label}</p>
            <p className="m-0 text-sm font-light">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioItem;
