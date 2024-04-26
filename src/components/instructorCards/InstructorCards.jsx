import { InstructorPieces } from "./InstructorPieces"
import Susie from "../../assets/instructorImg/Susie.jpeg"
import Olivia from "../../assets/instructorImg/Olivia.jpeg"
import Micheal from "../../assets/instructorImg/Micheal.jpeg"

export const InstructorCards = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:gap-y-1 sm:pt-3 md:gap-y-1 md:pt-[80px] lg:gap-y-5 lg:pt-[144px]'>
       <h4 className="ubuntu sm:text-xl lg:text-3xl text-white">Meet three of our instructors!</h4>
       <div className='flex sm:gap-1 md:gap-1'>
        <InstructorPieces image={Susie} alt={'Susie'} instructorName={'Susie'} instructorInfo={"Always cheerful and energetic - Susie will make sure you'll have a great time!"} 
        imageStyle= {"sm:w-[162px] sm:h-[85px] rounded-[10px] object-cover object-top md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"}/>
        <InstructorPieces image={Olivia} alt={'Olivia'} instructorName={'Olivia'}
        instructorInfo={"Always on the look out for the latest Zumba trends, Olivia can guarantee you new steps every month!"} 
        imageStyle= {"sm:w-[162px] sm:h-[85px] rounded-[10px] object-cover object-center md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"}/>
        <InstructorPieces image={Micheal} alt={'Michael'} instructorName={'Michael'}
        instructorInfo={"Having a big passion for dance, Michael will make sure you'll also love dance as much as he does!"} 
        imageStyle= {"sm:w-[162px] sm:h-[85px] rounded-[10px] object-cover object-center md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"}/>
       </div>
    </div>
  )
}
//Michael's image need to be confirmed with designer
//'w-[315px] h-[150px] rounded-[10px] object-cover object-top'