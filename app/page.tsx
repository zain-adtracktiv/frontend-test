import RadioGroup from "./UI/RadioGroup/RadioGroup";

export default function Home() {
  const inputs = [
    {
      id: "threeSticks",
      value: "threeSticks",
      title: "3 Sticks(-32%)",
      subtitle: "$64.00/each",
      tags: ["bestDeal"],
    },
    {
      id: "twoSticks",
      value: "twoSticks",
      title: "2 Sticks(-22%)",
      subtitle: "$71.00/each",
    },
    {
      id: "oneSticks",
      value: "oneSticks",
      title: "1 Sticks(-15%)",
      subtitle: "$75.00",
    },
  ];
  return (
    <div className="text-xl font-bold p-12">
      <RadioGroup inputs={inputs} groupName="sticksGroup" />
    </div>
  );
}
