import { Text } from "../component/Text";
import { Image } from "../component/Image";
import { ButtonPrimary } from "../component/ButtonPrimary";
import { useState, useEffect } from "react";
import { ButtonSecondary } from "../component/ButtonSecondary";

export const Testimonial = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    // <div className="flex flex-col items-center px-9 pb-28 md:gap-8 md:px-16 md:pb-8 lg:gap-35 lg:text-20">
    //   <Image
    //     className="self-center"
    //     link={"/Images/star.svg"}
    //     imgText={"red flame"}
    //   />
    //   <Text
    //     className="p-2.5 text-center font-bold"
    //     text={` "The best workout of my life" - Marie PT" `}
    //   />

      <div class="relative md:block">
        {windowWidth >= 1280 ? (
          <div className="text-32 mx-117">
            <div className="flex flex-col text-xl gap-25">
            <Image
              className="self-center"
              link={"/Images/star.svg"}
              imgText={"five stars"}
            />
            <Text
              className="p-2.5 mb-25 text-center font-bold"
              text={` "The best workout of my life" - Marie PT" `}
            />
            </div>
            <img
              className="h-height-seven w-width-five object-cover mx-auto"
              src={"/Images/barbell.svg"}
            />
            <div className="h-height-eight w-width-six absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-custom-4 border border-solid border-black shadow-custom-btn-2">
            <div
              className="absolute inset-0 flex flex-col items-center justify-between
             "
            >
              <div className="">
              <ButtonPrimary text={"Join us"} addedClasses="p-2.5" />
              </div>

              <div className="flex flex-row justify-between w-full px-4">
                
                <ButtonSecondary addedClasses="p-2.5 rounded-lg" text={"Who are we?"} />
                
                <ButtonSecondary addedClasses="p-2.5 rounded-lg" text={"Our trainers"} />
                
                <ButtonSecondary addedClasses="p-2.5 rounded-lg" text={"Health benefits"} />
              </div>
              <div className="flex flex-row justify-between w-full px-4 mb-4">
              <ButtonSecondary
                addedClasses="p-2.5 rounded-lg w-full "
                text={"Membership cards"}
              />
              </div>
              </div>
            </div>
          </div>
        ) : (
         
          <div className="flex flex-col items-center px-9 pb-28 md:gap-8 md:px-16 md:pb-8 lg:gap-35 lg:text-20">
              <Image
              className="self-center"
              link={"/Images/star.svg"}
              imgText={"five stars"}
            />
            <Text
              className="p-2.5 text-center font-bold"
              text={` "The best workout of my life" - Marie PT" `}
            />
              <Image
                className="mt-7 h-height-two w-width-two object-cover md:mt-0 md:h-height-four md:w-width-three"
                link={"/Images/weights.svg"}
                imgText={"people lifting weights"}
              />
        
      </div>
        )}
</div>
)}
