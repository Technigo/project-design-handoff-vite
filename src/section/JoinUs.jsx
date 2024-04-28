import { ButtonPrimary } from "../component/ButtonPrimary";
import { ButtonSecondary } from "../component/ButtonSecondary";
import { ButtonThird } from "../component/ButtonThird";
import { Image } from "../component/Image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

export const JoinUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="xl:mx- flex flex-col items-center gap-28 px-9 md:gap-8 md:px-16 lg:gap-25 2xl:gap-25">
      <ButtonPrimary
        text={"Join us"}
        addedClasses="py-21 px-6 xl:hidden 2xl:hidden"
      />

      <Carousel
        showStatus={false}
        showIndicators={false}
        className="w-full rounded-custom text-lg md:p-6 md:text-2xl lg:hidden xl:hidden 2xl:hidden "
      >
        <ButtonSecondary addedClasses="p-5 md:w-72" text={"Who are we?"} />
        <ButtonSecondary addedClasses="p-5 md:w-72" text={"Our trainers"} />
        <ButtonSecondary addedClasses="p-5  md:w-72" text={"Health benefits"} />
      </Carousel>

      <ButtonSecondary
        addedClasses="w-72 h-14 px-2.5 rounded-custom-two text-xl sm:w-width-12 md:text-2xl md:py-5 md:w-width-three md:h-custom-height xl:hidden 2xl:hidden"
        text={"Membership cards"}
      />
      <ButtonPrimary
        text={"Book a private session"}
        addedClasses="w-48 py-21 px-6 md:hidden"
      />
      {/* barbell section */}
      <div class="relative hidden md:block xl:hidden 2xl:hidden">
        <img
          className="rounded-lg md:h-height-six md:w-width-three md:object-cover"
          src={"/Images/barbell.svg"}
        />
        <div className="md:absolute md:inset-6 md:h-height-five md:w-width-four md:bg-white md:bg-opacity-50"></div>
        <div className="m md:absolute md:inset-0 md:flex md:items-center md:justify-evenly">
          <ButtonPrimary text={"First time"} addedClasses="py-21 px-6 " />
          <ButtonPrimary
            text={"Book a private session"}
            addedClasses="w-48 py-21 px-6"
          />
        </div>
      </div>

      <div className="flex flex-row gap-2.5 md:gap-36 xl:mx-117 xl:gap-56 xl:pt-25 2xl:mx-117 2xl:gap-72 2xl:pt-25">
        <ButtonThird
          addedClasses="sm:w-width-7 sm:h-height-9 sm:text-base md:w-width-7 md:h-height-9 xl:text-3xl 2xl:text-32 xl:rounded-custom-three 2xl:rounded-custom-three xl:w-width-8 xl:h-height-10"
          text={"45 minutes"}
        />
        <ButtonThird
          addedClasses="sm:w-width-7 sm:h-height-9 sm:text-base md:w-width-7 md:h-height-9 xl:text-3xl 2xl:text-32 xl:rounded-custom-three 2xl:rounded-custom-three xl:w-width-8 xl:h-height-10"
          text={"3 sections"}
        />
        <ButtonThird
          addedClasses="sm:w-width-7 sm:h-height-9 sm:text-base md:w-width-7 md:h-height-9 xl:text-31 2xl:text-32 xl:rounded-custom-three 2xl:rounded-custom-three xl:w-width-8 xl:h-height-10"
          text={"Heart rate monitor"}
        />
      </div>
      <div>
        <Image
          link={"/Images/plank.svg"}
          alt={"people working out"}
          className="mb-38 mt-3.5 object-cover xs:h-56 xs:w-64 sm:h-height-three sm:w-width-two md:h-height-four md:w-width-three md:object-cover md:object-center xl:h-height-12 xl:w-width-10 xl:pt-0 2xl:w-width-five 2xl:pt-0"
        />
      </div>

      {windowWidth >= 1280 ? (
        <div className="flex flex-col gap-25">
          <Image
            className="h-height-11 w-width-10 object-cover 2xl:w-width-five"
            link={"/Images/weights.svg"}
            imgText={"people lifting weights"}
          />
          <div class="relative">
            <Image
              className="h-height-five rounded-custom-4 object-cover lg:w-width-10 2xl:w-width-five"
              link={"/Images/weightplate.svg"}
              imgText={"bar weights"}
            />

            <div className="absolute inset-0 flex items-center justify-around text-32">
              <ButtonPrimary
                text={"First time"}
                addedClasses="w-48 py-21 px-6"
              />
              <ButtonPrimary
                text={"5 time pass"}
                addedClasses="w-48 py-21 px-6"
              />
              <ButtonPrimary text={"Job openings"} addedClasses="py-21 px-6" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
