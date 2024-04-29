import { useState } from "react";

export const FindUsButton = () => {
  const [textColor, setTextColor] = useState("text-black");
  const [bgColor, setBgColor] = useState("bg-yellow");

  const changeColor = () => {
    setTextColor(textColor === "text-black" ? "text-pink" : "text-black");
    setBgColor(bgColor === "bg-yellow" ? "bg-dkpurple" : "bg-yellow");
  };
  return (
    <button
      className={`h-[40px] w-[147px] rounded-[10px] ${bgColor} text-center text-[20px] font-bold ${textColor} shadow-[rgba(222,32,249,0.5)_3px_4px_0px_0px] hover:bg-dkpurple hover:text-yellow md:w-[147px] lg:h-[65px] lg:w-[296px] lg:text-[36px] lg:shadow-[rgba(222,32,249,1)_3px_4px_0px_0px]`}
      onClick={changeColor}
    >
      Find us!
    </button>
  );
};

export const JoinUsButton = () => {
  const [textColor, setTextColor] = useState("text-black");
  const [bgColor, setBgColor] = useState("bg-yellow");

  const changeColor = () => {
    setTextColor("text-pink");
    setBgColor("bg-dkpurple");
  };
  return (
    <button
      className={`h-[40px] w-[147px] rounded-[10px] ${bgColor}  text-center text-[20px] font-bold ${textColor} shadow-[rgba(222,32,249,0.5)_3px_4px_0px_0px] hover:bg-dkpurple hover:text-yellow md:w-[193px] lg:h-[86px] lg:w-[394px] lg:text-[36px] lg:shadow-[rgba(222,32,249,1)_3px_4px_0px_0px]`}
      onClick={changeColor}
    >
      Join us!
    </button>
  );
};
