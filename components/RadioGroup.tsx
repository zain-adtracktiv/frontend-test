"use client";
import { useState } from "react";

function RadioGroup() {
  
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleSelect = (card: string) => {
    setSelectedCard(card);
  };

  return (
    <div className="grid grid-cols-3 gap-x-14">
      {/* card 1 */}
      <div
        className={`relative px-14 py-10 border-4 rounded-3xl bg-gray-100 cursor-pointer ${
          selectedCard === "card1" ? "border-indigo-600 border-4" : "border-gray-300"
        }`}
        onClick={() => handleSelect("card1")}
      >
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-4 py-1 font-normal bg-indigo-700 ${
          selectedCard === "card1" ? "bg-indigo-600 text-white" : "bg-gray-300 text-black "
        }`}>
          <h3 className="text-xl">BEST DEAL</h3>
        </div>
        <div className="flex items-start gap-x-4 text-2xl">
          <div>
            <input
              className="form-radio h-6 w-6 text-indigo-700 scale-125 accent-indigo-700"
              type="radio"
              name="deal"
              checked={selectedCard === "card1"}
              
            />
          </div>
          <div>
            <h2 className="font-bold tracking-wider">3 Sticks (-32%)</h2>
            <p className="font-normal">$ 64.00/each</p>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div
        className={`px-14 py-10 border-4 rounded-3xl bg-gray-100 cursor-pointer ${
          selectedCard === "card2" ? "border-indigo-600 border-4" : "border-gray-300"
        }`}
        onClick={() => handleSelect("card2")}

      >
        <div className="flex items-start gap-x-4 text-2xl">
          <div>
            <input
              className="form-radio h-6 w-6 text-indigo-700 scale-125 accent-indigo-700"
              type="radio"
              name="deal"
              checked={selectedCard === "card2"}
              onChange={() => handleSelect("card2")}
            />
          </div>
          <div>
            <h2 className="font-bold tracking-wider">2 Sticks (-22%)</h2>
            <p className="font-normal">$ 71.00/each</p>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div
        className={`px-14 py-10 border-4 rounded-3xl bg-gray-100 cursor-pointer ${
          selectedCard === "card3" ? "border-indigo-600 border-4" : "border-gray-300"
        }`}
        onClick={() => handleSelect("card3")}

      >
        <div className="flex items-start gap-x-4 text-2xl">
          <div>
            <input
              className="form-radio h-6 w-6 text-indigo-700 scale-125 accent-indigo-700"
              type="radio"
              name="deal"
              checked={selectedCard === "card3"}
              onChange={() => handleSelect("card3")}
            />
          </div>
          <div>
            <h2 className="font-bold tracking-wider">1 Stick (-15%)</h2>
            <p className="font-normal">$ 75.00/each</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioGroup;
