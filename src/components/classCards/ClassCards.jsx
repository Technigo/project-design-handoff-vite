import { ClassPieces } from "./ClassPieces";
import ZumbaEnergetic from "/classImg/ZumbaEnergetic.jpeg";
import ZumbaHeavy from "/classImg/ZumbaHeavy.jpeg";
import JustZumba from "/classImg/JustZumba.jpeg";
import { Dots } from "../dot/Dots";

export const ClassCards = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[40px] md:gap-y-1 md:pt-[80px] lg:gap-y-5 lg:px-[60px] lg:pt-[144px] ">
      <h2 className=" text-xl text-white lg:text-3xl">
        Some of our classes!
      </h2>
      <div className="scroll smooth flex h-full w-screen flex-none items-start gap-1 overflow-x-scroll whitespace-nowrap pb-[20px] md:gap-[30px] lg:gap-[27px] lg:overflow-x-hidden lg:justify-center">
        <ClassPieces
          image={ZumbaEnergetic}
          alt={"People are having Zumba class"}
          courseName={"Zumba Energetic"}
          courseInfo={
            "A class for you that want a fast paced and high cardio workout!"
          }
        />
        <ClassPieces
          image={ZumbaHeavy}
          alt={"People are having Zumba Heavy"}
          courseName={"Zumba Heavy"}
          courseInfo={
            "This class will challenge you a bit further - dance with weights!"
          }
        />
        <ClassPieces
          image={JustZumba}
          alt={"People are having standard Zumba"}
          courseName={"Just Zumba"}
          courseInfo={
            "The classic Zumba concept! follow along with dance steps!"
          }
        />
      </div>
      <Dots />
    </div>
  );
};