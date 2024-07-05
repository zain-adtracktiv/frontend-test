"use client";

import RadioGroup from "@/components/ui/radio-group";
import {
  BestDeal,
  RadioGroup as RadioGroup2,
  RadioGroupItem,
} from "@/components/ui/radio-group-2";

import * as React from "react";

export default function Home() {
  const options = [
    { label: "3 Sticks (-32%)", value: 46.0, each: true },
    { label: "2 Sticks (-22%)", value: 71.0, each: true },
    { label: "1 Stick (-15%)", value: 75.0 },
  ];
  const [selectedValue, setSelectedValue] = React.useState<number>(
    options[0].value
  );

  // second radioGroup
  const options2 = [
    { stick: 3, discount: 32, price: 46.0 },
    {
      stick: 2,
      discount: 22,
      price: 71.0,
    },
    { stick: 1, discount: 15, price: 75.0 },
  ];

  const [selected2Value, setSelected2Value] = React.useState<string>(
    `${options2[0].stick}-stick`
  );

  const lowestPriceOption = options2.reduce((prev, current) =>
    current.price < prev.price ? current : prev
  );

  return (
    <div className="flex flex-col py-10 items-center justify-center">
      <h1 className="text-xl font-bold mb-10">
        Create a RadioGroup component and use it here
      </h1>
      <RadioGroup
        options={options}
        name="example"
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        // Optional
        // bestDealLabel="Best Deal"
        // customStyles={{
        //   container: "",
        //   optionContainer: "",
        //   radioButton: "",
        //   selectedRadioButton: "",
        //   label: "",
        //   price: "",
        //   bestDealTag: "",
        // }}
      />
      <RadioGroup2 className="my-4">
        {options2.map((option) => (
          <RadioGroupItem
            key={option.stick}
            value={`${option.stick}-stick`}
            name={`${option.stick}-stick`}
            selectedValue={selected2Value}
            onChange={setSelected2Value}
          >
            <span className={"text-[#14181F] font-bold text-xl"}>
              {option.stick} {option.stick > 1 ? "Sticks" : "Stick"} (-
              {option.discount}%)
            </span>
            <span className={"text-[#262A32] text-sm"}>
              ${option.price}
              {option.stick > 1 && "/each"}
            </span>
            {option === lowestPriceOption && <BestDeal>Best Deal</BestDeal>}
          </RadioGroupItem>
        ))}
      </RadioGroup2>
    </div>
  );
}
