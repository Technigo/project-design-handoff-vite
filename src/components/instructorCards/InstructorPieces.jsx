export const InstructorPieces = ({image, alt, instructorInfo, instructorName,imageStyle}) => {
    
        return (
            <div className='flex flex-col w-[395px] h-[434px] rounded-[10px] bg-purple px-[40px] pt-[25px] pb-[35px] gap-y-[25px] shadow-xl shadow-pink shadow-opacity-75 overflow-hidden
            '> 
                <img src={image} alt={alt} className={imageStyle}/>
                <div className="flex flex-col gap-y-[20px]">
                    <h5 className="text-xl">{instructorName}</h5>
                <p className="text-5xl">{instructorInfo}</p>  
                </div>
                 
            </div>
        )
    }
    // 'w-[315px] h-[150px] rounded-[10px] object-cover'
