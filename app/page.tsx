import RadioGroup from "@/components/RadioGroup";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4 text-center mt-[10px]">
          Select Your Option
        </h1>
        <RadioGroup />
      </header>
    </div>
  );
}
