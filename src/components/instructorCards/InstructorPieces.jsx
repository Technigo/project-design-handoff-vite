import { useState } from "react";

export const InstructorPieces = ({
  image,
  alt,
  instructorInfo,
  instructorName,
  imageStyle,
}) => {
  const [isClick, setClicked] = useState("white");

  const clickCard = () => {
    setClicked(isClick === "white" ? "pink" : "white");
  };
  return (
    <div
      className={`shadow-opacity-75 relative flex-none inline-block h-[338px] w-[202px] flex-col gap-y-1 text-wrap rounded-[10px] bg-purple px-[20px] 
      pb-[25px] shadow-xl shadow-pink hover:cursor-pointer hover:bg-pink hover:text-black
      sm:pt-[15px] md:h-[361px] md:w-[245px] md:gap-y-[20px] md:px-[25px] md:pb-[35px]
      md:pt-[15px] lg:h-[434px]  lg:w-[395px] lg:gap-y-[25px] 
      lg:px-[40px] lg:pb-[35px] text-${isClick}`}
      onClick={clickCard}
    >
      <img src={image} alt={alt} className={imageStyle} />
      <div className="flex flex-col gap-y-[8px] md:gap-y-[15px] lg:gap-y-[20px]">
        <h3 className=" text-lg md:text-xl ">{instructorName}</h3>
        <p className=" lg:text-7xl text-base leading-tight tracking-wide">
          {instructorInfo}
        </p>
      </div>
    </div>
  );
};