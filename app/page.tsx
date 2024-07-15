import RadioGroup from "@/components/radioGroup/RadioGroup";

export default function Home() {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <RadioGroup
        radioContent={[
          {optionName: '3-stick', mainLabel: '3 Sticks (-32%)', priceString: '$64.00/each', bestDeal: true},
          {optionName: '2-stick', mainLabel: '2 Sticks (-22%)', priceString: '$71.00/each', bestDeal: false},
          {optionName: '1-stick', mainLabel: '1 Stick (-15%)', priceString: '$75.00', bestDeal: false}
        ]}
      />
    </div>
  );
}
