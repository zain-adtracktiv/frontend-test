import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Home() {
  const options = [
    {
      name: "3 Sticks (-32%)",
      price: "$64.00/each",
      isBestDeal: true,
    },
    {
      name: "2 Sticks (-22%)",
      price: "$71.00/each",
      isBestDeal: false,
    },
    { name: "1 Stick (-15%)", price: "$75.00", isBestDeal: false },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 max-w-4xl mx-auto">
      <RadioGroup
        defaultValue={options[0].name}
        className="grid grid-cols-3 gap-x-5 w-full"
      >
        {options.map((option) => (
          <RadioGroupItem
            key={option.name}
            value={option.name}
            className="relative"
          >
            <div className="text-left">
              <div className="text-xl text-gray-900 font-bold">
                {option.name}
              </div>
              <div className="text-gray-700 mt-1">{option.price}</div>
            </div>
            {option.isBestDeal && (
              <div className="absolute text-white text-sm bg-indigo-500 px-3 py-1 uppercase tracking-wide rounded-lg top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                best deal
              </div>
            )}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  );
}
