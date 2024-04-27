import styled from "styled-components";
import buttonData from "../data/Buttons.json";
import { Buttons } from "./Buttons";

// Parent container with relative positioning
const StyledHeroCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  height: 100%;
  margin-top: 80px;
  margin-bottom: 80px;

  @media (min-width: 375px) and (max-width: 744px) {
    margin-top: 40px;
    margin-bottom: 40px;
    overflow-x: auto; 
    white-space: nowrap; 
    padding: 20px; 
    gap: 40px; 
    height: auto; 
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 48px;
    margin-bottom: 48px;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
`;

// Container for image and button, with relative positioning
const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 357px;
  height: 376px;

  border-radius: 12px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.imagesrc})`};

  .hero-btn {
    margin-top: 50px;
  }

  @media (min-width: 375px) and (max-width: 744px) {
    width: 194px;
    height: 317px;
    flex-shrink: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 376px;
    width: 191px;
    flex-shrink: 0;
  }
`;

export const HeroCard = () => {
  const buttonsWithImages = buttonData.filter((item) => item.imageId);

  return (
    <StyledHeroCardContainer>
      {buttonsWithImages.map((item, index) => (
        <StyledImageContainer key={index} imagesrc={item.imageId}>
          <Buttons buttonText={item.buttonText} fontSize={15} />
        </StyledImageContainer>
      ))}
    </StyledHeroCardContainer>
  );
};
