'use client';
import { useState } from 'react';
import SubscriptionCard from './components/subscription-card/SubscriptionCard';

export default function Home() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const handleCheckboxChange = (index: number) => {
    setSelectedCardIndex(index);
  };

  const deals = [
    {
      title: '3 Stick (-32%)',
      price: '$64.00/each',
      selected: false,
      bestDeal: true,
    },
    { title: '2 Stick (-22%)', price: '$71.00/each', selected: false },
    { title: '1 Stick (-15%)', price: '$75.00', selected: false },
  ];
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 relative'>
      {deals.map((deal, index) => (
        <div
          key={index}
          className=' max-w-xs relative items-center justify-center '
        >
          {deal.bestDeal && (
            <div className='pl-3 pr-3 p-1 flex bg-selectedColor rounded-lg  absolute top- left-20 right-15  self-center'>
              <p className='text-white text-sm'>BEST DEAL</p>
            </div>
          )}
          <SubscriptionCard
            checked={selectedCardIndex === index}
            onChange={() => handleCheckboxChange(index)}
            label={deal.title}
            price={deal.price}
          />
        </div>
      ))}
    </div>
  );
}
