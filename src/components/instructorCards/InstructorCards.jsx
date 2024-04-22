import { InstructorPieces } from "./InstructorPieces"
import Susie from "../../assets/instructorImg/Susie.jpeg"
import Olivia from "../../assets/instructorImg/Olivia.jpeg"
import Micheal from "../../assets/instructorImg/Micheal.jpeg"

export const InstructorCards = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-5 pt-7'>
       <h4 className="ubuntu text-3xl text-white">Meet three of our instructors!</h4>
       <div className='flex gap-1 '>
        <InstructorPieces image={Susie} alt={'Susie'} instructorName={'Susie'} instructorInfo={"Always cheerful and energetic - Susie will make sure you'll have a great time!"} imageStyle= {'w-[315px] h-[150px] rounded-[10px] object-cover object-top'}/>
        <InstructorPieces image={Olivia} alt={'Olivia'} instructorName={'Olivia'}
        instructorInfo={"Always on the look out for the latest Zumba trends, Olivia can guarantee you new steps every month!"} imageStyle= {'w-[315px] h-[150px] rounded-[10px] object-cover'}/>
        <InstructorPieces image={Micheal} alt={'Michael'} instructorName={'Michael'}
        instructorInfo={"Having a big passion for dance, Michael will make sure you'll also love dance as much as he does!"} imageStyle= {'w-[315px] h-[150px] rounded-[10px] object-cover object-'}/>
       </div>
    </div>
  )
}
