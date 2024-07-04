interface RadioItem {
  label: string;
  value: number;
  isEach?: boolean;
  isBestDeal?: boolean;
}
export const radioOptions: RadioItem[] = [
  { label: "3 Sticks (-32%)", value: 46.0, isEach: true, isBestDeal: true },
  { label: "2 Sticks (-22%)", value: 71.0, isEach: true },
  { label: "1 Stick (-15%)", value: 75.0 },
];
