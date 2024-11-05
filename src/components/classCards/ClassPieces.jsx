// import { useGym } from "../../GymContext"
import { useState } from "react";

export const ClassPieces = ({ image, alt, courseName, courseInfo }) => {
  const [isClick, setClicked] = useState("white");

  const clickCard = () => {
    setClicked(isClick === "white" ? "pink" : "white");
  };

  return (
    <div
      className={`relative inline-block h-[369px] w-[257px] flex-none flex-col gap-y-1 text-wrap rounded-[10px] bg-purple px-[15px] pb-[24px] pt-1 shadow-base shadow-yellow hover:cursor-pointer hover:bg-yellow hover:text-black md:h-[382px] md:w-[334px] md:px-[32px] md:pb-[32px] md:pt-[24px] lg:h-[552px] lg:w-[422px] lg:gap-y-[25px] lg:px-[40px] lg:pb-[45px] lg:pt-[40px] text-${isClick}`}
      onClick={clickCard}
    >
      <img
        src={image}
        alt={alt}
        className="h-[132px] w-[226px] rounded-[10px] md:h-[196px] md:w-[270px] lg:h-[289px] lg:w-[342px]"
      />
      <div className="flex flex-col  md:gap-y-1 lg:gap-y-2">
        <h3 className="text-lg lg:text-xl">{courseName}</h3>
        <p className="lg:text-7xl text-5xl leading-tight tracking-normal md:text-base">
          {courseInfo}
        </p>
      </div>
    </div>
  );
};