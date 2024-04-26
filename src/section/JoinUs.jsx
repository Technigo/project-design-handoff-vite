import { ButtonPrimary } from "../component/ButtonPrimary";
import { ButtonSecondary } from "../component/ButtonSecondary";
import { ButtonThird } from "../component/ButtonThird";
import { Image } from "../component/Image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

export const JoinUs = () => {
  // const [currentIndex, setCurrentIndex] = useState(0)
  // const buttonTexts = ["Who are we?", "Our trainers", "Health benefits"]

  // const nextButton = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length)
  // }

  // const prevButton = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + buttonTexts.length) % buttonTexts.length)
  // }

  return (
    <div className="container mx-auto flex flex-col items-center gap-28 px-9 md:gap-8 md:px-16">
      <ButtonPrimary text={"Join us"} addedClasses="py-21 px-6" />

      {/* <ButtonSecondary text={buttonTexts[currentIndex]} />
      <button onClick={nextButton}>next</button> */}
      <Carousel showStatus={false} showIndicators={false}>
        <ButtonSecondary text={"Who are we?"} />

        <ButtonSecondary text={"Our trainers"} />

        <ButtonSecondary text={"Health benefits"} />
      </Carousel>

      <ButtonSecondary
        addedClasses="md:rounded-custom-two md:px-2.5 md:py-5 md:w-width-three"
        text={"Membership cards"}
      />

      <ButtonPrimary
        text={"Book a private session"}
        addedClasses="w-48 py-21 px-6"
      />

      <div class="relative hidden md:block">
        <img
          className="md:h-height-six md:w-width-three md:object-cover"
          src={"/Images/barbell.svg"}
        ></img>

        <div className="md:w-width-four md:h-height-five md:absolute md:inset-6 md:bg-white md:bg-opacity-50"></div>
        <div className="m md:absolute md:inset-0 md:flex md:items-center md:justify-evenly">
          <ButtonPrimary text={"First time"} addedClasses="py-21 px-6 " />
          <ButtonPrimary
            text={"Book a private session"}
            addedClasses="w-48 py-21 px-6"
          />
        </div>
      </div>

      <div className="flex flex-row gap-2.5 md:gap-36">
        <ButtonThird addedClasses="" text={"45 minutes"} />
        <ButtonThird text={"3 sections"} />
        <ButtonThird text={"Heart rate monitor"} />
      </div>
      <div>
        <Image
          link={"/Images/plank.svg"}
          alt={"people working out"}
          className="h-height-three w-width-two object-cover object-right pb-38 pt-3.5 md:h-height-four md:w-width-three md:object-cover md:object-center"
        />
      </div>
    </div>
  );
};
