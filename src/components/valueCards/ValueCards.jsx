import Jump from "/valueImg/Jump.jpeg"
import Move from "/valueImg/Move.jpeg"
import Room from "/valueImg/Room.jpeg"
import { ReadMore } from "./ReadMore"
import { ValueHeader } from "./ValueHeader"
import { ValueImg } from "./ValueImg"
import { MiddleReadMore } from "./MiddleReadMore"

export const ValueCards = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:w-full sm:gap-y-1 sm:pt-3 md:gap-y-[47px] md:pt-6 lg:gap-y-5 lg:pt-[144px]">
      <h4 className="Ubuntu text-white sm:text-xl md:text-xl lg:text-3xl ">
        <span className="hidden md:inline lg:inline">
          Why you should train with us!
        </span>
        <span className="inline md:hidden lg:hidden">Why train with us?</span>
      </h4>
      <div className="flex w-full items-center justify-center border-b-[4px] border-pink bg-pink bg-opacity-25 sm:flex sm:h-[361px] sm:flex-col sm:gap-[30px] sm:gap-y-1 sm:px-[24px] sm:pb-[30px] sm:pt-[20px] md:h-[244px] md:w-full md:flex-row md:gap-y-1 md:px-[33px] md:py-[17px] lg:h-[501px] lg:gap-y-5 lg:px-[113px] lg:py-[45px]">
        <ValueImg image={Room} alt={"a gym room"} />
        <div className="flex flex-col sm:gap-y-[8px] md:gap-y-1 lg:gap-y-[24px]">
          <ValueHeader
            valueHeaderSmall={"New dance hall"}
            valueHeaderBig={"New building catered to dance!"}
          />
          <p className="ubuntu sm:text-7xl sm:text-wrap md:text-base lg:text-5xl">
            Newly build Zumba dance gym with big halls and luxurious changing
            rooms.
          </p>
          <p className="ubuntu text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            We have made sure that our premises will ispire you to keep moving
            and explore all of the activities we offer.
          </p>
          <p className="ubuntu text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            <span className="font-bold">
              Relax after your class in the sauna!
            </span><br/>
            Our main changing rooms each have a sauna connected to the showers.
          </p>
          <ReadMore />
          </div>
      </div>

      <div className="flex w-full items-center justify-center border-b-[4px] border-pink bg-pink bg-opacity-25 sm:flex sm:h-[361px] sm:flex-col sm:gap-[30px] sm:gap-y-1 sm:px-[24px] sm:pb-[30px] sm:pt-[20px] md:h-[244px] md:w-full md:flex-row-reverse md:gap-y-1 md:px-[33px] md:py-[17px] lg:h-[501px] lg:gap-y-5 lg:px-[113px] lg:py-[45px]">
        <ValueImg image={Move} alt={"a woman is training"} />
        <div className="flex flex-col sm:gap-y-[8px] md:gap-y-1 lg:gap-y-[24px]">
          <ValueHeader
            valueHeaderSmall={"Certified instructors"}
            valueHeaderBig={"Licensed Zumba instructors"}
          />
          <p className="ubuntu sm:text-7xl sm:text-wrap md:text-base lg:text-5xl">
            Our instructors will make sure your workout sessions are fun,
            challenging and at your level!
          </p>
          <p className="Ubuntu text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            We make sure that all of our Zumba instructors have the license to
            teach Zumba classes.
          </p>
          <p className="Ubuntu text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            They also get time of every six months to renew their license and
            vreat new and exiting classes for our members
          </p>
          <MiddleReadMore />
        </div>
      </div>

      <div className="flex w-full items-center justify-center border-b-[4px] border-pink bg-pink bg-opacity-25 sm:flex sm:h-[361px] sm:flex-col sm:gap-[30px] sm:gap-y-1 sm:px-[24px] sm:pb-[30px] sm:pt-[20px] md:h-[244px] md:flex-row md:gap-y-1 md:px-[33px] md:py-[17px] lg:h-[501px] lg:gap-y-5 lg:px-[113px] lg:py-[45px]  ">
        <ValueImg image={Jump} alt={"jumping"} />
        <div className="flex flex-col sm:gap-y-[8px] md:gap-y-1 lg:gap-y-[24px]">
          <ValueHeader
            valueHeaderBig={"Changing classes"}
            valueHeaderSmall={"Changing classes"}
          />
          <p className="ubuntu sm:text-7xl sm:text-wrap lg:text-5xl">
            Change your type of class whenever you want
            <span className="lg:font-bold">-free of charge!</span>
          </p>
          <p className="ubuntu sm:text-7px sm:text-wrap sm:hidden md:hidden md:text-base lg:inline lg:text-5xl">
            We want our members to feel free in their class choices, since we
            never know how och when life will throw us a vurve ball.
          </p>
          <p className="Ubuntu text-white sm:hidden md:hidden lg:inline lg:text-5xl">
            Instead of not exercising, we want our members to be able to find a
            new slot in their life for some Zumba dance.
          </p>
          <ReadMore />
        </div>
      </div>
    </div>
  );
};