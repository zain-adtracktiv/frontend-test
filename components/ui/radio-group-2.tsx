import { cn } from "@/lib/utils";

type RadioGroupProps = {
  className?: string;
  children: React.ReactNode;
};

type RadioGroupItemProps = {
  className?: string;
  value: string;
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  radioButtonClassName?: string;
  selectedRadioButtonClassName?: string;
  children: React.ReactNode;
};

export const RadioGroup = ({ className, children }: RadioGroupProps) => {
  return (
    <div className={cn("flex gap-4 flex-wrap", className)}>{children}</div>
  );
};

export const RadioGroupItem = ({
  className,
  value,
  name,
  selectedValue,
  onChange,
  radioButtonClassName,
  selectedRadioButtonClassName,
  children,
}: RadioGroupItemProps) => {
  return (
    <label
      className={cn(
        "flex relative cursor-pointer gap-2 border-2 rounded-2xl p-4 py-5 pr-8",
        {
          "bg-[#ECEBFE] border-[#4745EE]": selectedValue === value,
          "bg-[#DEE2EA] border-[#B7BED0]": selectedValue !== value,
        },
        className
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className="hidden"
        aria-labelledby={`label-${value}`}
      />
      <span
        className={cn(
          "size-7 bg-white rounded-full",
          {
            "border-[#5A58F2] border-[8px]": selectedValue === value,
            "border-[#B7BED0] border": selectedValue !== value,
          },
          radioButtonClassName,
          selectedValue === value && selectedRadioButtonClassName
        )}
      ></span>
      <div className="flex flex-col">{children}</div>
    </label>
  );
};

export const BestDeal = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute text-white text-sm uppercase bg-[#5A58F2] rounded-xl p-3.5 py-1 w-fit -top-4 mx-auto left-0 right-0",
        className
      )}
    >
      {children}
    </div>
  );
};
