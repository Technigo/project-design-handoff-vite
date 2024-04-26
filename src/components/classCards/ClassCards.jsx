import { ClassPieces } from "./ClassPieces"
import ZumbaEnergetic from "../../assets/classImg/ZumbaEnergetic.jpeg"
import ZumbaHeavy from "../../assets/classImg/ZumbaHeavy.jpeg"
import JustZumba from "../../assets/classImg/JustZumba.jpeg"
// import {useGym} from "../../GymContext"

export const ClassCards = () => {
  // const {bgColor,fontColor, clickCard } = useGym()

  return (
    <div className='flex flex-col justify-center items-center sm:pt-[40px] md:pt-[80px] md:gap-y-1 lg:pt-[144px] lg:gap-y-5 lg:px-[60px]'>
    <h4 className='ubuntu sm:text-xl  lg:text-3xl text-white' >Some of our classes!</h4>
    <div className='flex sm:gap-1 md:gap-[30px] lg:gap-[27px]'>
      <ClassPieces image={ZumbaEnergetic} alt={'People are having Zumba class'} 
    courseName={'Zumba Energetic'} courseInfo={'A class for you that want a fast paced and high cardio workout!'}
    />
    <ClassPieces image={ZumbaHeavy} alt={'People are having Zumba Heavy'}
    courseName={'Zumba Heavy'} courseInfo={'This class will challenge you a bit further - dance with weights!'}
    />
    <ClassPieces image={JustZumba} alt={'People are having standard Zumba'}
    courseName={'Just Zumba'} courseInfo={'The classic Zumba concept! follow along with dance steps!'}
    />
    </div>
    </div>
  )
}
