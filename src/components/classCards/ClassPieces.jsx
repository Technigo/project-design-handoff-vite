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
      <div className="flex h-[552px] w-[422px] flex-col gap-y-[25px] rounded-[10px] bg-purple px-[40px] pb-[45px] pt-[40px] text-white shadow-base shadow-yellow hover:cursor-pointer hover:bg-yellow hover:text-black sm:w-[257px] sm:h-[369px] sm:gap-y-1 sm:pb-[24px] sm:pt-1 md:h-auto md:w-full md:px-2 md:pb-2 md:pt-4">
        <img
          src={image}
          alt={alt}
          className="h-[289px] w-[342px] rounded-[10px] sm:h-auto sm:w-full md:h-auto md:w-full"
        />
        <div className="flex flex-col gap-y-2 sm:gap-y-[8px] sm:px-[15px] md:gap-y-1">
          <h5 className="Ubuntu text-xl sm:text-lg md:text-lg">{courseName}</h5>
          <p className="Ubuntu text-5xl md:text-base">{courseInfo}</p>
        </div>
      </div>
    );
}