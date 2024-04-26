//import styled
import styled from "styled-components";

//import reusables
import { Button } from "../reusables/Button";
import { HeadingTwo } from "../reusables/HeadingTwo";
import { ParagraphTwo } from "../reusables/ParagraphTwo";
import { Arrow } from "../reusables/Arrow";
import { YogiCard } from "../reusables/YogiCard";

// import pictures
import TeacherBlack from "../../public/images/teacher-black.png";
import TeacherWhite from "../../public/images/teacher-white.png";
import TeacherGrey from "../../public/images/teacher-grey.png";

//import hooks
// import { useEffect, useState } from "react";

//styles

const YogisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 744px) {
    flex-direction: row;
  }
`;

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
    picture: TeacherWhite,
    name: "Lisa Debaum",
    teaching: "Vinyasa Yoga | Pranayama",
    description:
      "My journey with yoga began as a personal quest for inner peace and self-discovery. Over the years, this practice has transformed my life in profound ways, nurturing not only my body but also my....",
  },

  {
    picture: TeacherGrey,
    name: "Kim Park",
    teaching: "Hatha Yoga | Restorative",
    description:
      "I came into contact with yoga a couple of years ago and right from the start my yoga practice became extremely important to me. With yoga as a tool, I can slow down my thoughts, be honest... ",
  },
];

//component
export const Yogis = () => {
  return (
    <div>
      <HeadingTwo>Meet our yogis</HeadingTwo>
      <ParagraphTwo>
        At Shanti Studio, our instructors bring years of experience and humble
        wisdom to their teachings, welcoming all with open hearts.
      </ParagraphTwo>
      <Arrow left={true} />
      <Arrow />
      <YogisWrapper>
        {/* render MembershipCard with the data */}
        {yogiData.map((yogi, index) => (
          <YogiCard
            key={index}
            picture={<img src={yogi.picture} alt={`${yogi.name} picture`} />}
            name={yogi.name}
            teaching={yogi.teaching}
            description={yogi.description}
          />
        ))}
      </YogisWrapper>
      <Button>Check schedule</Button>
    </div>
  );
};
