import { ButtonPrimary } from "../component/ButtonPrimary";
import { ButtonSecondary } from "../component/ButtonSecondary";
import { ButtonThird } from "../component/ButtonThird";
import { Image } from "../component/Image";
// import { Carousel } from 'react-responsive-carousel';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useState, useEffect } from "react"

const CarouselButtons = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const buttonTexts = ["Who are we?", "Our trainers", "Health benefits"]

  const nextButton = () => {
    setCurrentIndex((prevIndex) => {prevIndex + 1})
  }
}



export const JoinUs = () => {
  return (
    <div className="flex flex-col items-center gap-28 px-9 md:gap-8">
      <ButtonPrimary text={"Join us"} addedClasses="py-21 px-6" />

   
      <ButtonSecondary text={"Who are we?"} />
      
      <ButtonSecondary text={"Our trainers"} />
      
      <ButtonSecondary text={"Health benefits"} />
      

      <ButtonSecondary text={"Membership cards"} />

      <ButtonPrimary
        text={"Book a private session"}
        addedClasses="w-48 py-21 px-6"
      />

      <div className="flex flex-row gap-2.5">
        <ButtonThird addedClasses="" text={"45 minutes"} />
        <ButtonThird text={"3 sections"} />
        <ButtonThird text={"Heart rate monitor"} />
      </div>
    <div>
      <Image
        link={"/Images/plank.svg"}
        alt={"people working out"}
        className="w-width-two h-height-two pb-38 pt-3.5 object-cover"
      />
      </div>
    </div>
  );
};
