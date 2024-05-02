import { useRef, useState } from "react";
import styled from "styled-components";

import { activity } from "../libraries/slidercardsdata.json";
import { SliderCard } from "./SliderCard";

export const Slider = () => {
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
    <StyledSliderButtonBox>
      {showLeftButton && (
        <StyledSliderButton
          aria-label="button to scroll to the left"
          onClick={() => handleScroll(-400)}
        >
          <img src="ScrollLeft.svg" alt="arrowleft" />
        </StyledSliderButton>
      )}
      <div
        ref={containerRef}
        style={{ overflowX: "scroll", scrollBehavior: "smooth" }}
      >
        <StyledSlider>
          {activity.map((data, index) => (
            <SliderCard key={index} data={data} />
          ))}
        </StyledSlider>
      </div>
      {showRightButton && (
        <StyledSliderButton
          aria-label="button to scroll to the right"
          $left
          onClick={() => handleScroll(400)}
        >
          <img src="ScrollRight.svg" alt="arrowright" />
        </StyledSliderButton>
      )}
    </StyledSliderButtonBox>
  );
};

// Styled Components

const StyledSlider = styled.section`
  display: flex;
  gap: 8px;
  margin: 0 24px;

  @media screen and (min-width: 834px) {
    margin: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 128px;
    gap: 24px;
  }
`;

const StyledSliderButtonBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

const StyledSliderButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 100px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: ${({ $left }) => ($left ? "85%" : "10%")};

  @media screen and (min-width: 640px) {
    display: none;
  }
`;
