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
        <CardDescription className="secondary-paragraph">
          {description}
        </CardDescription>
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
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  height: 432px;

  @media (min-width: ${breakpoints.tablet}) {
    /*  height: 600px; looks good on tablet but creates space on the desktop */
    height: 600px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
      height: 336px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%; //keep this 
  /* height: 336px; */ // ensure a consistent hight since we have different image sizes
  overflow: hidden;
  border-radius: 16px 56px 0 0;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 16px 0 0 56px;
    width: 512px;
    height: 336px;
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  //nothing to change here

  @media (min-width: ${breakpoints.tablet}) {
    /* border-radius: 16px 56px 0 0; */
  }

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 16px 0 0 56px;
  }
`;

const CardContent = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; //makes the button to move to the bottom: ;
  background-color: var(--yellow-light);
  border-radius: 0 16px 56px 0;
  border-left: 8px solid var(--yellow-medium);
  border-bottom: 8px solid var(--yellow-medium);
/*   padding: 16px; */
  /*   padding: 32px;  makes the card info to get bigger*/

  @media (min-width: ${breakpoints.tablet}) {
    height: 320px;
    /*  padding: 32px; */
  }

  @media (min-width: ${breakpoints.desktop}) {
    border-left: none;
    border-top: 8px solid var(--yellow-medium);
  /*   padding: 32px; */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  /* padding: 0; with 32px kind add the space i need */

  @media (min-width: ${breakpoints.desktop}) {
  /*   margin-bottom: 32px; */
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 8px;
  margin: 0 0 16px 0;

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 16px;
  }
`;

const CardDescription = styled.p`
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  width: auto;
  padding: 0;
  padding: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 0 24px;
  }
`;
