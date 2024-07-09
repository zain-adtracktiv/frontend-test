// RadioGroup.tsx
"use client";
import { useState } from "react";
import Card from "./Card";

const cardData = [
  { id: "card1", title: "3 Sticks (-32%)", price: "$ 64.00/each", bestDeal: true },
  { id: "card2", title: "2 Sticks (-22%)", price: "$ 71.00/each" },
  { id: "card3", title: "1 Stick (-15%)", price: "$ 75.00/each" },
];

function RadioGroup() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleSelect = (card: string) => {
    setSelectedCard(card);
  };

  return (
    <div className="grid grid-cols-3 gap-x-14">
      {cardData.map(({ id, title, price, bestDeal }) => (
        <Card
          key={id}
          card={id}
          selectedCard={selectedCard}
          handleSelect={handleSelect}
          title={title}
          price={price}
          bestDeal={bestDeal}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
