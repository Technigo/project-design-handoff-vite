import styled from "styled-components";
import { useState, useRef } from 'react'

import { instructors } from "../libraries/instructors.json";
import { InstructorsSliderCard } from "./InstructorsSliderCard";

export const Instructors = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  const showLeftButton = scrollPosition > 0;
  const showRightButton = scrollPosition < 1;

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
      <StyledSliderButtonBox>
      {showLeftButton && (
        <StyledSliderButton onClick={() => handleScroll(-400)}>
          <img src="ScrollLeft.svg" />
        </StyledSliderButton>
      )}
      <div
        ref={containerRef}
        style={{ overflowX: "scroll", scrollBehavior: "smooth" }}
      >
      <StyledSlider>
        {instructors.map((instructor, index) => (
          <InstructorsSliderCard key={index} data={instructor} />
        ))}
        </StyledSlider>
        </div>
        {showRightButton && (
        <StyledSliderButton $left onClick={() => handleScroll(400)}>
          <img src="ScrollRight.svg" />
        </StyledSliderButton>
      )}
      </StyledSliderButtonBox>
    </StyledInstructors>
  );
};

//Styled Components

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
  `
  const StyledSlider = styled.section`
  display: flex;
  gap: 16px;
  margin: 0 24px;
  //Why is the margin on the right not showing???
`

const StyledSliderButtonBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const StyledSliderButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 100px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: ${({ $left }) => ($left ? "85%" : "10%")};
`


