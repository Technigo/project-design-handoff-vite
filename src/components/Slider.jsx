import { SliderCard } from "./SliderCard";
import styled from "styled-components";
import { activity } from "../../slidercardsdata.json";

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

const StyledSlider = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 24px;
`;
