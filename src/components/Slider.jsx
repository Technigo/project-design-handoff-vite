import { SliderCard } from "./SliderCard";
import styled from "styled-components";
import { activity } from "../libraries/slidercardsdata.json";

export const Slider = () => {
  return (
    <StyledSlider>
      {activity.map((data, index) => (
        <SliderCard key={index} data={data} />
      ))}
    </StyledSlider>
  );
};

// Styled Components

export const StyledSlider = styled.section`
  display: flex;
  gap: 16px;
  margin: 0 24px;
  overflow: scroll;
`;
