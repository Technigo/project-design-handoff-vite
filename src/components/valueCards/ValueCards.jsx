import { ValuePieces } from "./ValuePieces"
import Jump from "../../assets/valueImg/Jump.jpeg"
import Move from "../../assets/valueImg/Move.jpeg"
import Room from "../../assets/valueImg/Room.jpeg"
import arrowDesktop from "../../assets/icons/arrowDesktop.svg"

export const ValueCards = () => {
  return (
    <div className="flex flex-col gap-y-5 pt-7 justify-center items-center w-full">
      <h4 className="ubuntu text-3xl text-white ">Why you should train with us!</h4>
      <ValuePieces image={Room} alt={'gym room'} 
      heading={'New building catered to dance!'}
      valueContent1={"Newly build Zumba dance gym with big halls and luxurious changing rooms."}
      valueContent2={"We have made sure that our premises will ispire you to keep moving and explore all of the activities we offer."}
      spanContent={"Relax after your class in the sauna!"}
      valueContent3={"Our main changing rooms each have a sauna connected to the showers."}
      imageStyle={'w-[481px] [h-411px] rounded-[10px]'}
      containerStyle={'flex flex-row w-full h-[501px] py-[113px] px-[45px] gap-3 border-b-[4px] border-pink bg-pink bg-opacity-25'}
      textStyle={'flex flex-col gap-[24px]'}
      readMoreStyle={'flex flex-row gap-[20px] text-yellow text-lg'}
      svg={arrowDesktop}
      />
      <ValuePieces image={Move} alt={'a woman is wroking out'}
      heading={"Licensed Zumba instructors"}
      valueContent1={"Our instructors will make sure your workout sessions are fun, challenging and at your level!"}
      valueContent2={"We make sure that all of our Zumba instructors have the license to teach Zumba classes."}
      valueContent3={"They also get time of every six months to renew their license and vreat new and exiting classes for our members"}
      imageStyle={'w-[481px] [h-411px] rounded-[10px] object-cover object-top'}
      containerStyle={'flex flex-row flex-row-reverse w-full h-[501px] py-[113px] px-[45px] gap-3 overflow-hidden border-b-[4px] border-pink bg-pink bg-opacity-25'}
      textStyle={'flex flex-col gap-[24px]'}
      readMoreStyle={'flex flex-row gap-[20px] text-yellow text-lg'}
      svg={arrowDesktop}
      />
      <ValuePieces image={Jump} alt={'jumping'}
      heading={"Changing classes"}
      valueContent1={"Change your type of class whenever you want"}
      spanContent1={"-free of charge!"}
      valueContent2={"We want our members to feel free in their class choices, since we never know how och when life will throw us a vurve ball."}
      valueContent3={"Instead of not exercising, we want our members to be able to find a new slot in their life for some Zumba dance."}
      imageStyle={'w-[481px] [h-411px] rounded-[10px]'}
      containerStyle={'flex flex-row w-fullh-[501px] py-[113px] px-[45px] border-b-[4px] gap-3 border-pink bg-pink bg-opacity-25'}
      textStyle={'flex flex-col gap-[24px]'}
      readMoreStyle={'flex flex-row gap-[20px] text-yellow text-lg'}
      svg={arrowDesktop}

      />
    </div>
  )
}
