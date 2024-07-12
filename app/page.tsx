
import React from 'react';
import RadioGroup from '../components/RadioGroup';

const options = [
  { id: '1', label: '3 Sticks', price: '$64.00/each', discount: '-32%', bestDeal: true },
  { id: '2', label: '2 Sticks', price: '$71.00/each', discount: '-22%' },
  { id: '3', label: '1 Stick', price: '$75.00', discount: '-15%' },
];

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RadioGroup options={options} />
    </div>
  );
};

export default Home;
