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
          <div>
            <img
              className="h-height-seven w-width-five object-cover"
              src={"/Images/barbell.svg"}
            />
            <div className="h-height-eight w-width-six absolute inset-6 bg-white bg-opacity-50"></div>
            <div
              className="absolute inset-0 flex flex-col items-center justify-evenly
             "
            >
              <ButtonPrimary text={"Join us"} addedClasses="text-32 p-2.5 " />

              <div>
                <ButtonSecondary text={"Who are we?"} />
                <ButtonSecondary text={"Our trainers"} />
                <ButtonSecondary text={"Health benefits"} />
              </div>
              <ButtonSecondary
                addedClasses="md:rounded-custom-two md:px-2.5 md:py-5 md:w-width-three"
                text={"Membership cards"}
              />
            </div>
          </div>
        ) : (
         
          <div className="flex flex-col items-center px-9 pb-28 md:gap-8 md:px-16 md:pb-8 lg:gap-35 lg:text-20">
              <Image
              className="self-center"
              link={"/Images/star.svg"}
              imgText={"red flame"}
            />
            <Text
              className="p-2.5 text-center font-bold"
              text={` "The best workout of my life" - Marie PT" `}
            />
              <Image
                className="mt-7 h-height-two w-width-two object-cover md:mt-0 md:h-height-four md:w-width-three"
                link={"/Images/weights.svg"}
                alt={"people lifting weights"}
              />
        
      </div>
        )}
</div>
)}
