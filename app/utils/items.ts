export type Item = {
  id: number;
  isRecommended?: boolean;
  qty: number;
  title: string;
  discount?: number;
  cost: number;
  currency: string;
};

export const items: Item[] = [
  {
    id: 1,
    isRecommended: true,
    qty: 3,
    title: "Sticks",
    cost: 64.0,
    currency: "$",
    discount: 32,
  },
  {
    id: 2,
    isRecommended: false,
    qty: 2,
    title: "Sticks",
    cost: 71.0,
    currency: "$",
    discount: 22,
  },
  {
    id: 3,
    isRecommended: false,
    qty: 1,
    title: "Stick",
    cost: 75.0,
    currency: "$",
    discount: 15,
  },
];
