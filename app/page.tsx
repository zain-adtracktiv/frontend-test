import RadioGroup from "./components/RadioGroup";
import { items } from "./utils/items";

export default function Home() {
  return (
    <div className="text-xl font-bold">
      Create a RadioGroup component and use it here
      <RadioGroup items={items} />
    </div>
  );
}
