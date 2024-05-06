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
    <div class="relative md:block">
      {windowWidth >= 1280 ? (
        <div className="mx-117 text-32">
          <div className="flex flex-col gap-2.5 text-xl">
            <Image
              className="self-center"
              link={"/Images/star.svg"}
              imgText={"five stars"}
            />
            <Text
              className="mb-25 p-2.5 text-center font-bold"
              text={` "The best workout of my life" - Marie PT" `}
            />
          </div>
          <img
            className="mx-auto h-height-seven w-width-10 object-cover 2xl:w-width-five"
            src={"/Images/barbell.svg"}
          />
          <div className="absolute left-1/2 top-1/2 h-height-eight w-width-11 -translate-x-1/2 -translate-y-1/4 transform rounded-custom-4 border border-solid border-black bg-white bg-opacity-70 shadow-custom-btn-2">
            <div
              className="absolute inset-0 flex flex-col items-center justify-between
             "
            >
              <div className="">
                <ButtonPrimary text={"Join us"} addedClasses="p-2.5" />
              </div>
              <div className="flex w-full flex-row justify-between px-4">
                <ButtonSecondary
                  addedClasses="p-2.5 rounded-lg"
                  text={"Who are we?"}
                />
                <ButtonSecondary
                  addedClasses="p-2.5 rounded-lg"
                  text={"Our trainers"}
                />
                <ButtonSecondary
                  addedClasses="p-2.5 rounded-lg"
                  text={"Health benefits"}
                />
              </div>
              <div className="mb-4 flex w-full flex-row justify-between px-4">
                <ButtonSecondary
                  addedClasses="p-2.5 rounded-lg w-full "
                  text={"Membership cards"}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center px-9 pb-28 md:px-16 md:pb-8 lg:text-20">
          <Image
            className="self-center "
            link={"/Images/star.svg"}
            imgText={"five stars"}
          />
          <Text
            className="p-2.5 text-center font-bold md:mb-8 lg:mb-8"
            text={` "The best workout of my life" - Marie PT" `}
          />
          <Image
            className="mt-7 object-cover xs:h-56 xs:w-64 sm:h-height-two sm:w-width-two md:mt-0 md:h-height-four md:w-width-three"
            link={"/Images/weights.svg"}
            imgText={"people lifting weights"}
          />
        </div>
      )}
    </div>
  );
};
