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
        <StyledSliderButton onClick={() => handleScroll(-400)}>
          <img src="ScrollLeft.svg" />
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
        <StyledSliderButton $left onClick={() => handleScroll(400)}>
          <img src="ScrollRight.svg" />
        </StyledSliderButton>
      )}
    </StyledSliderButtonBox>
  );
};

// Styled Components

 const StyledSlider = styled.section`
  display: flex;
  gap: 16px;
  margin: 0 24px;
  //Why is the margin on the right not showing???
`;

const StyledSliderButtonBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledSliderButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 100px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: ${({ $left }) => ($left ? "85%" : "10%")};
`;
