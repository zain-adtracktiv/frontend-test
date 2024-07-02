"use client";
import SticksSelection from "./components/StickSelection";

export default function Home() {
  const stickOptions = [
    { id: 'three-sticks', label: '3 Sticks (-32%)', price: '$64.00/each', bestDeal: true },
    { id: 'two-sticks', label: '2 Sticks (-22%)', price: '$71.00/each', bestDeal: false },
    { id: 'one-stick', label: '1 Stick (-15%)', price: '$75.00', bestDeal: false },
  ];
  return (
    <div className="text-xl font-bold">
      Create a RadioGroup component and use it here
      <SticksSelection options={stickOptions} />
    </div>
  );
}
