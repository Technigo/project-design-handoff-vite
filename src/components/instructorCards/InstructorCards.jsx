
import { InstructorPieces } from "./InstructorPieces"
import Susie from "/instructorImg/Susie.jpeg"
import Olivia from "/instructorImg/Olivia.jpeg"
import smallMicheal from "/instructorImg/smallMicheal.png"

// import Micheal from "/instructorImg/Micheal.jpeg"
import { Dots } from "../dot/Dots"

// import { Carousel } from "react-responsive-carousel";
// import { useDeviceType } from "../useDeviceType"
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const InstructorCards = () => {
  // const deviceType = useDeviceType();
  // if (deviceType === "desktop") {
  //   return null;
  // }

  return (
    <div className="flex flex-col items-center justify-center sm:gap-y-1 sm:pt-3 md:gap-y-1 md:pt-[80px] lg:gap-y-5 lg:pt-[144px]">
      <h4 className="ubuntu text-white sm:text-xl lg:text-3xl text-center">
        Meet three of our instructors!
      </h4>
      <div className="flex sm:gap-1 md:gap-1 sm:overflow-scroll">
        {/* <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={false} swipeable={true} className="overflow-hidden"
        > */}
          {/* <div className="flex items-center justify-center"> */}
            <InstructorPieces
            image={Susie}
            alt={"Susie"}
            instructorName={"Susie"}
            instructorInfo={"Always cheerful and energetic - Susie will make sure you'll have a great time!"}
            imageStyle={"sm:w-[162px] sm:h-[85px] rounded-[10px] object-cover object-top md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"}
          />
          {/* </div> */}
          {/* <div className="flex items-center justify-center lg:inline-flex"> */}
             <InstructorPieces
            image={Olivia}
            alt={"Olivia"}
            instructorName={"Olivia"}
            instructorInfo={"Always on the look out for the latest Zumba trends, Olivia can guarantee you new steps every month!"}
            imageStyle={"sm:w-[162px] sm:h-[85px] rounded-[10px] object-cover object-center md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"}
          />
          {/* </div> */}
          {/* <div className="flex items-center justify-center"> */}
          <InstructorPieces
            image={smallMicheal}
            alt={"Michael"}
            instructorName={"Michael"}
            instructorInfo={"Having a big passion for dance, Michael will make sure you'll also love dance as much as he does!"}
            imageStyle={"sm:w-[162px] sm:h-[85px] rounded-[10px] object-cover object-center md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]"}
          /> 
       {/* </div> */}
        {/* </Carousel> */}
        </div>
      <Dots />
    </div>
  );
};

