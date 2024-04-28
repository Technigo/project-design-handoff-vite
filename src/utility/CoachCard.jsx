import styled from "styled-components";

import { breakpoints } from "./breakpoints";

const CoachCard = ({ title, subtitle, description, imageUrl }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="Coach" />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      <DescriptionSection>
        <Description className="secondary-paragraph">{description}</Description>
      </DescriptionSection>
    </CardContainer>
  );
};

export default CoachCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 272px;
  border-radius: 16px;
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 376px;
    margin-bottom: 24px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 32px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container */

  @media (min-width: ${breakpoints.tablet}) {
    width: 376px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px 0;
  gap: 8px;
`;

const Title = styled.h3`
  text-align: left;
  position: relative;
  white-space: pre-wrap;
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.h4`
  text-align: left;
  position: relative;
  white-space: pre-wrap;
  margin-bottom: 8px;
  margin: 0;
  padding: 0;

  @media (min-width: ${breakpoints.desktop}) {
    padding-top: 2px;
  }
`;

const DescriptionSection = styled.div`
  border-left: 4px solid var(--blue);
  padding-left: 8px;
  margin-top: 8px;

  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 16px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 32px;
    margin-top: 16px;
  }
`;

const Description = styled.p`
  text-align: left;
  width: 224px;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
    width: 334px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 309px;
  }
`;
