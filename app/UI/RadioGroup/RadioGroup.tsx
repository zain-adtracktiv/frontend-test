"use client";

import { useState } from "react";
import RadioGroupItem from "./RadioGroupItem";

export type TInput = {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

export default function RadioGroup({ inputs }: { inputs: TInput[] }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <form className="flex gap-4">
      {inputs.map((input) => (
        <RadioGroupItem
          key={input.id}
          id={input.id}
          value={input.value}
          title={input.title}
          subtitle={input.subtitle}
          tags={input.tags}
          groupName="radioGroup"
          checked={selectedValue === input.value}
          onChange={handleChange}
        />
      ))}
    </form>
  );
}
