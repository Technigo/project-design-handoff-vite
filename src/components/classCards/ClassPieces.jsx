// import { useGym } from "../../GymContext"
import {useState} from "react"


export const ClassPieces = ({ image, alt, courseName, courseInfo }) => {
  const [isClick, setClicked] = useState ('white')

  const clickCard = () => {
    setClicked (isClick === 'white' ? 'pink' : 'white')
  }

  return (
    <div className={`flex flex-col rounded-[10px] bg-purple shadow-base shadow-yellow hover:cursor-pointer hover:bg-yellow hover:text-black sm:h-[369px] sm:w-[257px] sm:gap-y-1 sm:px-[15px] sm:pb-[24px] sm:pt-1 md:h-[382px] md:w-[334px] md:px-[32px] md:pb-[32px] md:pt-[24px] lg:h-[552px] lg:w-[422px] lg:gap-y-[25px] lg:px-[40px] lg:pb-[45px] lg:pt-[40px] text-${isClick }`} onClick={clickCard} >
      <img
        src={image}
        alt={alt}
        className="rounded-[10px] sm:h-[132px] sm:w-[226px] md:h-[196px] md:w-[270px] lg:h-[289px] lg:w-[342px]"
      />
      <div className="flex flex-col sm:gap-y-[8px] sm:px-[15px] md:gap-y-1 lg:gap-y-2">
        <h5 className="ubuntu sm:text-lg lg:text-xl">{courseName}</h5>
        <p className="ubuntu sm:text-5xl md:text-base lg:text-5xl">
          {courseInfo}
        </p>
      </div>
  
    </div>
  );
};