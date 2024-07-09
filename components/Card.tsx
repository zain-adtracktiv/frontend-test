// Card.tsx
"use client";
import { FC } from "react";

interface CardProps {
  card: string;
  selectedCard: string | null;
  handleSelect: (card: string) => void;
  title: string;
  price: string;
  bestDeal?: boolean;
}

const Card: FC<CardProps> = ({ card, selectedCard, handleSelect, title, price, bestDeal }) => {
  return (
    <div
      className={`relative px-14 py-10 border-4 rounded-3xl bg-gray-100 cursor-pointer ${
        selectedCard === card ? "border-indigo-600" : "border-gray-300"
      }`}
      onClick={() => handleSelect(card)}
    >
      {bestDeal && (
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-4 py-1 font-normal ${
            selectedCard === card ? "bg-indigo-600 text-white" : "bg-gray-300 text-black"
          }`}
        >
          <h3 className="text-xl">BEST DEAL</h3>
        </div>
      )}
      <div className="flex items-start gap-x-4 text-2xl">
        <div>
          <input
            className="form-radio h-6 w-6 text-indigo-700 scale-125 accent-indigo-700"
            type="radio"
            name="deal"
            checked={selectedCard === card}
            readOnly
          />
        </div>
        <div>
          <h2 className="font-bold tracking-wider">{title}</h2>
          <p className="font-normal">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
