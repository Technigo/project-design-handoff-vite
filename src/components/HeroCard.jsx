import buttonData from "./Buttons.json";
import { Buttons } from "./Buttons";
import { HeroImages } from "./HeroImages";
import styled from "styled-components";

// Styled container for HeroCard, ensuring proper layout and spacing
const StyledHeroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  position: relative; 
  height: 500px; 
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 60.333px;
  bottom: 24px;
`;

export const HeroCard = () => {
  const topThreeButtons = buttonData.slice(1, 4);

  return (
    <div>
      <StyledHeroCardContainer>
        <HeroImages />
        <StyledButtonContainer>
          <Buttons buttonList={topThreeButtons} />
        </StyledButtonContainer>
      </StyledHeroCardContainer>
    </div>
  );
};
