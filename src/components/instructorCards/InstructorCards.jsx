import { InstructorPieces } from "./InstructorPieces";
import Susie from "/instructorImg/Susie.jpeg";
import Olivia from "/instructorImg/Olivia.jpeg";
import smallMicheal from "/instructorImg/smallMicheal.png";
import { Dots } from "../dot/Dots";

export const InstructorCards = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-y-1 pt-3 md:gap-y-1 md:pt-[80px] lg:gap-y-5 lg:pt-[144px]">
        <h2 className="text-center text-xl leading-tight text-white lg:text-3xl">
          Meet three of our instructors!
        </h2>
        <div className="scroll smooth flex h-full w-screen flex-none md:items-start gap-1 overflow-x-scroll whitespace-nowrap pb-[20px] lg:justify-center lg:overflow-x-hidden">
          <InstructorPieces
            image={Susie}
            alt={"Susie"}
            instructorName={"Susie"}
            instructorInfo={
              "Always cheerful and energetic - Susie will make sure you'll have a great time!"
            }
            imageStyle={
              "w-[162px] h-[85px] rounded-[10px] object-cover object-top md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"
            }
          />

          <InstructorPieces
            image={Olivia}
            alt={"Olivia"}
            instructorName={"Olivia"}
            instructorInfo={
              "Always on the look out for the latest Zumba trends, Olivia can guarantee you new steps every month!"
            }
            imageStyle={
              "w-[162px] h-[85px] rounded-[10px] object-cover object-center md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"
            }
          />

          <InstructorPieces
            image={smallMicheal}
            alt={"Michael"}
            instructorName={"Michael"}
            instructorInfo={
              "Having a big passion for dance, Michael will make sure you'll also love dance as much as he does!"
            }
            imageStyle={
              "w-[162px] h-[85px] rounded-[10px] object-cover object-center md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"
            }
          />
        </div>
      </div>
      <Dots />
    </>
  );
};