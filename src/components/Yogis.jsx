//import styled
import styled from "styled-components";

//import reusables
import { Button } from "../reusables/Button";
import { HeadingTwo } from "../reusables/HeadingTwo";
import { ParagraphTwo } from "../reusables/ParagraphTwo";
import { Arrow } from "../reusables/Arrow";
import { YogiCard } from "../reusables/YogiCard";

// import pictures
import TeacherBlack from "../../public/images/teacher-black2.png";
import TeacherWhite from "../../public/images/teacher-white2.png";
import TeacherGrey from "../../public/images/teacher-grey2.png";

//import react-slick dependencies for carousel
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//data object for yogis
const yogiData = [
  {
    picture: TeacherBlack,
    name: "Nicole Berger",
    teaching: "Pranayama | Yin Yoga",
    description:
      "I've probably been practising yoga since I was a child, but I never labelled it as such. As an adult, when I came into contact with yoga on a more organised level, a lot of pieces of the puzzle fell into place...",
  },

  {
    picture: TeacherGrey,
    name: "Kim Park",
    teaching: "Hatha Yoga | Restorative",
    description:
      "I came into contact with yoga a couple of years ago and right from the start my yoga practice became extremely important to me. With yoga as a tool, I can slow down my thoughts, be honest... ",
  },

  {
    picture: TeacherWhite,
    name: "Lisa Debaum",
    teaching: "Vinyasa Yoga | Pranayama",
    description:
      "My journey with yoga began as a personal quest for inner peace and self-discovery. Over the years, this practice has transformed my life in profound ways, nurturing not only my body but also my....",
  },
];

//styles
const YogiSection = styled.section`
  background: var(--secondary-blue);
`;

//component
export const Yogis = () => {
  const sliderRef = useRef(null); //use ref to controll slider

  const handleLeftArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); //navigate to previous slide
    }
  };

  const handleRightArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); //navigate to next slide
    }
  };

  //slider settings for carousel styling and responsiveness
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500, //transition speed in milliseconds
    arrows: false, //disable default slick arrows to use own
  };

  return (
    <YogiSection>
      <HeadingTwo>Meet our yogis</HeadingTwo>
      <ParagraphTwo>
        At Shanti Studio, our instructors bring years of experience and humble
        wisdom to their teachings, welcoming all with open hearts.
      </ParagraphTwo>
      <Arrow left={true} alt="left arrow" onClick={handleLeftArrow} />
      <Arrow alt="right arrow" onClick={handleRightArrow} />
      <Slider ref={sliderRef} {...sliderSettings}>
        {/* render YogiCard with the data */}
        {yogiData.map((yogi, index) => (
          <YogiCard
            key={index}
            picture={<img src={yogi.picture} alt={`${yogi.name} picture`} />}
            name={yogi.name}
            teaching={yogi.teaching}
            description={yogi.description}
          />
        ))}
      </Slider>
      <Button>Check schedule</Button>
    </YogiSection>
  );
};
