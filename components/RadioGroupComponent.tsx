import React from "react";

const RadioGroupComponent = ({
  selectionActiveTitle,
  dealDetails,
  dealPricingPerItem,
  isActive,
  onClick,
}: any) => {
  return (
    <div
      className={`w-full h-[120px] relative flex justify-center items-center border-2 rounded-lg ${
        isActive
          ? "bg-[#ECEBFE] border-[#5A58F2]"
          : "bg-[#DEE2EA] border-[#BEC4D4]"
      } lg:p-x-3`}
      onClick={onClick}
    >
      {isActive && (
        <p className="p-2 text-white w-fit border border-gray-500 rounded-lg absolute -mt-120 bg-[#5A58F2]">
          {selectionActiveTitle}
        </p>
      )}

      <div className="flex justify-center items-start gap-2 mt-2">
        <span
          className={`w-10 h-10 rounded-full inline-block ${
            isActive ? "border-8 border-gray-500" : "border-2 border-gray-400"
          } bg-transparent`}
          style={{
            borderColor: isActive ? "#5A58F2" : "#BEC4D4",
          }}
        ></span>{" "}
        <div>
          <p className="text-3xl md:text-3xl lg:text-3xl">{dealDetails}</p>
          <p className="font-normal text-lg ">{dealPricingPerItem}</p>
        </div>
      </div>
    </div>
  );
};

export default RadioGroupComponent;
