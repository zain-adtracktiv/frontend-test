"use client";

import { useState } from "react";
import RadioButton from "./radio-button";
import { Offers } from "@/constants";

const RadioGroup: React.FC = () => {
  const lowestPriceDeal = Offers.reduce((prev, current) =>
    prev.price < current.price ? prev : current,
  );

  const [selected, setSelected] = useState(lowestPriceDeal.id);

  return (
    <div className="p-12 justify-between items-center">
      <div className="relative flex flex-col sm:flex-row gap-8">
        {Offers.map((option) => (
          <RadioButton
            key={option.id}
            id={option.id}
            title={option.title}
            price={`$${option.price.toFixed(2)} ${option.priceText}`}
            selected={selected}
            onChange={setSelected}
            isBestDeal={option.id === lowestPriceDeal.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
