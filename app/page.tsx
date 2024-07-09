import RadioGroup from "@/components/RadioGroup";
import { IRadioProps } from "@/components/Radio";

const radioGroupData: IRadioProps[] = [
  {
    label: "3 Sticks (-32%)",
    description: "$64.00/each"
  },
  {
    label: "2 Sticks (-22%)",
    description: "$71.00/each"
  },
  {
    label: "1 Sticks (-15%)",
    description: "$75.00"
  },
]

export default function Home() {
  return (
    <>
      <div className="mt-60 w-full flex items-center justify-center">
        <RadioGroup items={radioGroupData} />
      </div>
    </>
  );
}
