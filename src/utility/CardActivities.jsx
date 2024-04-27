import { breakpoints } from "./breakpoints";
import Button from "./Button";
import styled from "styled-components";

export const CardActivities = ({ imageSrc, title, description }) => (
  <CardWrapper>
    <ImageWrapper>
      <CardImage src={imageSrc} alt={title} />
    </ImageWrapper>
    <CardInfo>
      <CardTitle>{title}</CardTitle>
      <CardParagraph className="secondary-paragraph">
        {description}
      </CardParagraph>
      <ButtonWrapper>
        <Button>
          Continue to Book
          <ArrowIcon />
        </Button>
      </ButtonWrapper>
    </CardInfo>
  </CardWrapper>
);

export default CardActivities;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    /* height: 600px; */
    padding: 0 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    padding: 0 80px;
    /* height: 336px; */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: 320px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px 56px 0 0;

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 16px 0 0 56px;
    height: 336px;
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    height: 320px;
    border-radius: 16px 56px 0 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 16px 0 0 56px;
    height: 336px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const CardInfo = styled.div`
  background-color: var(--yellow-light);
  display: flex;
  flex-direction: column;
  /*   justify-content: space-between; */
  border-radius: 0 16px 56px 0;
  border-left: 8px solid var(--yellow-medium);
  border-bottom: 8px solid var(--yellow-medium);
  padding: 32px 16px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 320px;
    padding: 32px;
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: column;
    border-left: none;
    border-top: 8px solid var(--yellow-medium);
    /*   padding: 32px 40px; */
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 16px;
  }
`;

const CardParagraph = styled.p`
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  padding: 0 16px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 32px;
  }
`;

const ArrowIcon = styled.span`
  display: inline-block; //make the arrow to be inside the reusable button
  width: 28px;
  height: 24px;
  background: url("/icons/arrow1.svg");
  background-size: contain;
  margin-left: 16px;
`;
