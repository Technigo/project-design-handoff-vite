import styled from "styled-components";
import buttonData from "./Buttons.json";
import { HeroImages } from "./HeroImages";
import { Buttons } from "./Buttons";

// Parent container with relative positioning
const StyledHeroCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Button container with absolute positioning for flexible layout
const StyledHeroButtonContainer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;




export const HeroCard = () => {
  const topThreeButtons = buttonData.slice(1, 4);

  return (
    <StyledHeroCardContainer>
      <HeroImages />
      <StyledHeroButtonContainer>

          <Buttons buttonList={topThreeButtons} />{" "}

      </StyledHeroButtonContainer>
    </StyledHeroCardContainer>
  );
};
