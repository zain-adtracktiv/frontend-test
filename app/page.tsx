"use client";

import React, { useState } from "react";
import RadioGroup from "./components/RadioGroup";
import { radioOptions } from "@/lib/constants";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<number>(
    radioOptions[0].value,
  );

  return (
    <div className="flex py-10 justify-center">
      <RadioGroup
        options={radioOptions}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  );
}
