"use client";
import RadioGroup from "@/components/ui/radio-group";

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
    </div>
  );
}
