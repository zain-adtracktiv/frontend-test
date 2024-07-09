"use client";
import React from 'react';
import RadioGroup  from '@/components/radio-group';

const Home: React.FC = () => {
  const options = [
    { id: 1, label: '3 Sticks (-32%)', price: '$64.00/each', bestDeal: true },
    { id: 2, label: '2 Sticks (-22%)', price: '$71.00/each' },
    { id: 3, label: '1 Stick (-15%)', price: '$75.00' },
  ];

  return (
    <div className="text-xl font-bold">
      RadioGroup component
      <div className="App">
          <RadioGroup options={options} />
      </div>
    </div>
  );
};

export default Home;
