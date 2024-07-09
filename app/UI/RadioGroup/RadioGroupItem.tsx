import { TInput } from "./RadioGroup";

type RadioGroupItemProps = TInput & {
  groupName: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export default function RadioGroupItem({
  id,
  value,
  subtitle,
  tags,
  groupName,
  title,
  checked,
  onChange,
}: RadioGroupItemProps) {
  let isBestDeal: boolean = false;

  if (tags?.find((tag) => tag === "bestDeal")) isBestDeal = true;

  const handleClick = () => {
    onChange(value);
  };

  return (
    <div
      key={id}
      className={`border-2 rounded-xl p-4 relative flex gap-2 ${
        isBestDeal
          ? "border-primary bg-secondary"
          : "border-background bg-background/80"
      }`}
    >
      {isBestDeal && (
        <div className="bg-primary text-white text-center w-fit px-2 py-1 text-xs font-normal tracking-wider rounded-full absolute -top-[20%] right-1/2 translate-x-1/2">
          BEST DEAL
        </div>
      )}

      <div>
        <div
          className={`w-8 h-8 cursor-pointer rounded-full border-8 bg-white ${
            checked ? "border-primary" : "border-white"
          }`}
          onClick={handleClick}
        />
        <input
          className="hidden"
          type="radio"
          id={id}
          value={value}
          name={groupName}
          checked={checked}
          onChange={handleClick}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div>{title}</div>
        <div className="text-xs font-normal">{subtitle}</div>
      </div>
    </div>
  );
}
