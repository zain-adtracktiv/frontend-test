"use client";

import { useState } from "react";
import RadioGroup from "../components/RadioGroup";

const options = [
  {
    label: "3 Sticks (-32%)",
    value: "option1",
    price: "$64.00/each",
    badge: "BEST DEAL",
  },
  { label: "2 Sticks (-22%)", value: "option2", price: "$71.00/each" },
  { label: "1 Stick (-15%)", value: "option3", price: "$75.00" },
];

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  return (
    <div className="p-4">
      <h1 id="radio-group-label" className="text-xl mb-4">
        Select Your Package
      </h1>
      <RadioGroup
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
};

export default Home;
