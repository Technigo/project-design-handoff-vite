import styled from "styled-components";

import { instructors } from "../libraries/instructors.json";
import { StyledSlider } from "./Slider";
import { SliderCard } from "./SliderCard";

export const Instructors = () => {
  return (
    <StyledInstructors>
      <div className="instructors">
        <h2>MEET THE INSTRUCTORS</h2>
        <p>
          At Liftly we work with the best so you can feel your best. Our team of
          top instructors will empower you to reach all your fitness and
          wellness goals and enjoy the journey on the way.
        </p>
      </div>
      <StyledSlider>
        {instructors.map((instructor, index) => (
          <SliderCard $longcard key={index} data={instructor} />
          //We have to be able to make these cards higher right now it is not working yet. But the only solution I could think of is making a new SliderCard Component but before I change all the code maybe you have another idea but will have to change it eventually.
        ))}
      </StyledSlider>
    </StyledInstructors>
  );
};

const StyledInstructors = styled.section`
  .instructors {
    margin: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 36px;
    line-height: 50px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    line-height: 38px;
  }
`;
