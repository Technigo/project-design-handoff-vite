export const ClassPieces = ({image, alt, courseName, courseInfo}) => {
    return (
        <div className='flex flex-col w-[422px] h-[552px] rounded-[10px] bg-purple px-[40px] pt-[40px] pb-[45px] gap-y-[25px] shadow-base shadow-yellow '>
            <img src={image} alt={alt} className='w-[342px] h-[289px] rounded-[10px]'/>
            <div className="flex flex-col gap-y-2">
                <h5 className="text-xl">{courseName}</h5>
            <p className="text-5xl">{courseInfo}</p>  
            </div>
             
        </div>
    )
}