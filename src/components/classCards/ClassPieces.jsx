// import { useGym } from "../../GymContext"

export const ClassPieces = ({image, alt, courseName, courseInfo}) => {
    return (
        <div className='flex flex-col sm:w-[257px] sm:h-[369px] sm:pt-1 sm:pb-[24px] sm:gap-y-1 md:w-[334px] md:h-[382px] md:pt-[24px] md:px-2 md:pb-2w-[422px] h-[552px] rounded-[10px] bg-purple hover:bg-yellow px-[40px] pt-[40px] pb-[45px] gap-y-[25px] shadow-base shadow-yellow text-white hover:text-black hover:cursor-pointer '>
            <img src={image} alt={alt} className='sm:w-[226px] sm:h-[132px] md:w-[270px] md:h-[196px] w-[342px] h-[289px] rounded-[10px]'/>
            <div className="flex flex-col sm:px-[15px] sm:gap-y-[8px] md:gap-y-1 gap-y-2">
                <h5 className="Ubuntu sm:text-lg md:text-lg  text-xl">{courseName}</h5>
            <p className="Ubuntu md:text-base text-5xl">{courseInfo}</p>  
            </div>
        </div>
    )
}