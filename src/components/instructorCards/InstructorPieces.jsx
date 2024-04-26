export const InstructorPieces = ({image, alt, instructorInfo, instructorName,imageStyle}) => {
    
        return (
        <div className="flex flex-col sm:w-[202px] sm:h-[338px] sm:gap-y-1 sm:pt-[15px] sm:px-[20px] sm:pb-[25px] rounded-[10px] bg-purple 
         md:w-[245px] md:h-[361px] md:pt-[15px] md:px-[25px] md:pb-[35px] md:gap-y-[20px]
         lg:w-[395px] lg:h-[434px] lg:pt-[25px] lg:px-[40px] lg:pb-[35px] lg:gap-y-[25px]
         hover:cursor-pointer hover:bg-pink  hover:text-black 
         shadow-xl shadow-pink shadow-opacity-75">
            <img src={image} alt={alt} className={imageStyle} />
            <div className="flex flex-col sm:gap-y-[8px] md:gap-y-[15px] lg:gap-y-[20px]">
                <h5 className="ubuntu sm:text-lg md:text-xl ">{instructorName}</h5>
                <p className="ubuntu sm:text-base lg:text-5xl">{instructorInfo}</p>
            </div>
        </div>
            // <div className='flex flex-col w-[395px] h-[434px] rounded-[10px] bg-purple hover:bg-pink px-[40px] pt-[25px] pb-[35px] gap-y-[25px] shadow-xl shadow-pink shadow-opacity-75  text-white hover:text-black hover:cursor-pointer
            // '> 
            //     <img src={image} alt={alt} className={imageStyle}/>
            //     <div className="flex flex-col gap-y-[20px]">
            //         <h5 className="text-xl">{instructorName}</h5>
            //     <p className="text-5xl">{instructorInfo}</p>  
            //     </div>
            // </div>
        )
    }
   
