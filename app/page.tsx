"use client";
import RadioGroup from "@/app/components/RadioGroup";

export default function Home() {
  return (
    <div className="text-xl font-bold">
      <RadioGroup
        options={[
          {
            label: "3 Sticks (-32%)",
            value: "option1",
            unitPrice: "$64.00/each",
            isBestDeal: true,
          },
          {
            label: "2 Sticks (-22%)",
            value: "option2",
            unitPrice: "$71.00/each",
          },
          {
            label: "1 Stick (-15%)",
            value: "option3",
            unitPrice: "$75.00",
          },
        ]}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
