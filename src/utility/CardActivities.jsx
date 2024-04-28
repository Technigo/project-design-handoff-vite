import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import Button from "./Button";

export const CardActivities = ({ imageSrc, title, description }) => (
  <CardWrapper>
    <ImageWrapper>
      <CardImage src={imageSrc} alt={title} />
    </ImageWrapper>
    <CardContent>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="secondary-paragraph">{description}</CardDescription>
      </TextContainer>
      <ButtonWrapper>
        <Button withArrow={true}>Continue to Book</Button>
      </ButtonWrapper>
    </CardContent>
  </CardWrapper>
);

export default CardActivities;


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 16px;
  border-radius: 16px; /* Consistent border radius for all screens */

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  
  }
`;

const ImageWrapper = styled.div`
  width: 100%; /* Maintain full width for image */
  overflow: hidden;
  border-radius: 16px 56px 0 0;
  width: 100%;
  aspect-ratio: 16/9;

  @media (min-width: ${breakpoints.tablet}) {
    /* height: 600px; */
  }

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 16px 0 0 56px;
    width: 50%; /* Set width to 50% on desktop */
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
 
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Align content vertically */
  background-color: var(--yellow-light);
  border-radius: 0 16px 56px 0;
  border-left: 8px solid var(--yellow-medium);
  border-bottom: 8px solid var(--yellow-medium);
  padding: 16px;
  width: 100%;

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 0px 56px 16px 0px;
    width: 50%; /* Set width to 50% on desktop */
    border-left: none; /* Remove left border on desktop */
    border-top: 8px solid var(--yellow-medium); /* Add top border on desktop */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Text left-aligned */
  padding: 0; /* Remove extra padding within content */
`;

const CardTitle = styled.h3`
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%; /* Button container spans full width */
  padding: 0; /* Remove extra padding within button container */
`;
