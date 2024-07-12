'use client';
import { useState } from 'react';
import RadioButtonLayout from './RadioButtonLayout';

const RadioGroup: React.FC = () => {
  const deals = [
    {
      id: 'deal1',
      title: '3 Sticks (-32%)',
      price: 64.0,
      priceText: 'each',
    },
    {
      id: 'deal2',
      title: '2 Sticks (-22%)',
      price: 71.0,
      priceText: 'each',
    },
    {
      id: 'deal3',
      title: '1 Stick (-15%)',
      price: 75.0,
      priceText: '',
    },
  ];

  const lowestPriceDeal = deals.reduce((prev, current) =>
    prev.price < current.price ? prev : current
  );

  const [selected, setSelected] = useState(lowestPriceDeal.id);

  return (
    <div className="p-12 justify-between items-center">
      <div className="relative flex flex-col sm:flex-row gap-8">
        {deals.map((option) => (
          <RadioButtonLayout
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
