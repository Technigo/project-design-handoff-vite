import { ButtonPrimary } from "../component/ButtonPrimary";
import { ButtonSecondary } from "../component/ButtonSecondary";
import { ButtonThird } from "../component/ButtonThird";
import { Image } from "../component/Image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const JoinUs = () => {
  return (
    <div className="flex flex-col items-center gap-28 px-9 md:gap-8 md:px-16">
      <ButtonPrimary text={"Join us"} addedClasses="py-21 px-6 xl:hidden 2xl:hidden" />
      <Carousel
        showStatus={false}
        showIndicators={false}
        className="w-full lg:hidden xl:hidden 2xl:hidden">
        <ButtonSecondary text={"Who are we?"} />
        <ButtonSecondary text={"Our trainers"} />
        <ButtonSecondary text={"Health benefits"} />
      </Carousel>
      <ButtonSecondary
        addedClasses="md:rounded-custom-two md:px-2.5 md:py-5 md:w-width-three xl:hidden 2xl:hidden"
        text={"Membership cards"}
      />
      <ButtonPrimary
        text={"Book a private session"}
        addedClasses="w-48 py-21 px-6 md:hidden"
      />
      {/* barbell section */}
      <div class="relative hidden md:block xl:hidden 2xl:hidden">
        <img
          className="md:h-height-six md:w-width-three md:object-cover"
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

      <div className="flex flex-row gap-2.5 md:gap-36">
        <ButtonThird addedClasses="xl:text-32 2xl:text-32 xl:rounded-custom-three 2xl:rounded-custom-three p-20" text={"45 minutes"} />
        <ButtonThird addedClasses="xl:text-32 2xl:text-32 xl:rounded-custom-three 2xl:rounded-custom-three" text={"3 sections"} />
        <ButtonThird addedClasses="xl:text-32 2xl:text-32 xl:rounded-custom-three 2xl:rounded-custom-three" text={"Heart rate monitor"} />
      </div>
      {/* <div> */}
        <Image
          link={"/Images/plank.svg"}
          alt={"people working out"}
          className="h-height-three w-width-two object-cover pb-38 pt-3.5 md:h-height-four md:w-width-three md:object-cover md:object-center"
        />
      {/* </div> */}
    </div>
  );
};
