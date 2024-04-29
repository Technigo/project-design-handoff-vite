import LessonsImage from "../assets/ourLessonsImage.png";
import { Button } from "./Buttons";

import styled from "styled-components";

export const OurLessons = () => {
  return (
    <>
      <OurLessonsWrapper>
        <OurLessonsImage></OurLessonsImage>
        <OurLessonContent>
          <OurLessonsText>
            <h1>Our Lessons</h1>
            <p>
              Personalise your stay and add our snowboarding lessons! Whether
              you're just starting out or have already some skills - we offer
              lessons that suit every Powder Betty’s need!
            </p>
          </OurLessonsText>
          <Button>Explore our Lessons</Button>
        </OurLessonContent>
      </OurLessonsWrapper>
    </>
  );
};

const OurLessonsWrapper = styled.section`
  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const OurLessonContent = styled.div`
  background-color: #e6f4ff;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 24px;
`;

const OurLessonsImage = styled.div`
  background-image: url(${LessonsImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
  width: 100%;
  min-height: 240px;
  
  @media (min-width: 600px) {
    order: 1;
  }
`;

const OurLessonsText = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  h1 {
    color: #0b1623;
    font-family: Philosopher;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 1.08px;
    width: 100%;
  }
  p {
    color: #0b1623;
    font-family: Mulish;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-bottom: 40px;
    width: 100%;
  }
`;
