// import { useGym } from "../../GymContext"

export const ClassPieces = ({image, alt, courseName, courseInfo}) => {
    return (
      // <div className='flex flex-col sm:w-full sm:h-auto sm:pt-1 sm:pb-[24px] sm:gap-y-1 md:w-[334px] md:h-[382px] md:pt-[24px] md:px-2 md:pb-2 w-[422px] h-[552px] rounded-[10px] bg-purple hover:bg-yellow px-[40px] pt-[40px] pb-[45px] gap-y-[25px] shadow-base shadow-yellow text-white hover:text-black hover:cursor-pointer '>
      //     <img src={image} alt={alt} className='sm:w-[226px] sm:h-[132px] md:w-[270px] md:h-[196px] w-[342px] h-[289px] rounded-[10px]'/>
      //     <div className="flex flex-col sm:px-[15px] sm:gap-y-[8px] md:gap-y-1 gap-y-2">
      //         <h5 className="Ubuntu sm:text-lg md:text-lg text-xl">{courseName}</h5>
      //     <p className="Ubuntu md:text-base text-5xl">{courseInfo}</p>
      //     </div>
      // </div>
      <div className="flex flex-col sm:w-[257px] sm:h-[369px] sm:pt-1 sm:px-[15px] sm:pb-[24px] sm:gap-y-1 md:w-[334px] md:h-[382px] md:pt-[24px] md:px-[32px] md:pb-[32px] lg:w-[422px] lg:h-[552px] lg:pt-[40px] lg:px-[40px] lg:pb-[45px] lg:gap-y-[25px] bg-purple shadow-base shadow-yellow hover:cursor-pointer hover:bg-yellow hover:text-black rounded-[10px]">
        <img
          src={image}
          alt={alt}
          className="sm:w-[226px] sm:h-[132px] rounded-[10px] md:w-[270px] md:h-[196px] lg:w-[342px] lg:h-[289px]"
        />
        <div className="flex flex-col sm:gap-y-[8px] sm:px-[15px] md:gap-y-1 lg:gap-y-2">
          <h5 className="ubuntu sm:text-lg lg:text-xl">{courseName}</h5>
          <p className="ubuntu sm:text-5xl md:text-base lg:text-5xl">{courseInfo}</p>
        </div>
      </div>
    );
}
//h-[552px] w-[422px] flex-col gap-y-[25px] rounded-[10px] bg-purple px-[40px] pb-[45px] pt-[40px] text-white shadow-base shadow-yellow hover:cursor-pointer hover:bg-yellow hover:text-black sm:w-[257px] sm:h-[369px] sm:gap-y-1 sm:pb-[24px] sm:pt-1 md:h-auto md:w-full md:px-2 md:pb-2 md:pt-4