import {useState} from "react"

export const InstructorPieces = ({
  image,
  alt,
  instructorInfo,
  instructorName,
  imageStyle,
}) => {

  const [isClick, setClicked] = useState ('white')

  const clickCard = () => {
    setClicked (isClick === 'white' ? 'pink' : 'white')
  }
  return (
   
      <div
      className={`shadow-opacity-75 flex-col rounded-[10px] bg-purple shadow-xl shadow-pink hover:cursor-pointer hover:bg-pink hover:text-black 
         sm:h-[338px] sm:w-[202px] sm:gap-y-1 sm:px-[20px] sm:pb-[25px] sm:pt-[15px]
         md:h-[361px] md:w-[245px] md:gap-y-[20px] md:px-[25px] md:pb-[35px] md:pt-[15px]
         lg:h-[434px] lg:w-[395px]  lg:gap-y-[25px] relative inline-block text-wrap
         lg:px-[40px] lg:pb-[35px] lg:pt-[25px] text-${isClick}`} onClick={clickCard}
    >
      <img src={image} alt={alt} className={imageStyle} />
      <div className="flex flex-col sm:gap-y-[8px] md:gap-y-[15px] lg:gap-y-[20px]">
        <h5 className="ubuntu sm:text-lg md:text-xl ">{instructorName}</h5>
        <p className="ubuntu sm:text-base lg:text-7xl">{instructorInfo}</p>
      </div>
    </div>

    
  );
};
