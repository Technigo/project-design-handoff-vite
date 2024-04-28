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
  width: 100%;;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
padding: 16px;


  @media (min-width: ${breakpoints.tablet}) {
    /*  height: 600px; looks good on tablet but creates space on the desktop */
    padding: 0 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
justify-content: space-between;
padding: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%; //keep this 
/*   height: 320px; makes the picture to not be aline*/
  overflow: hidden;
  border-radius: 16px 56px 0 0;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 16px 0 0 56px;
    width: 50%; //not helping
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 400px;
  height: 100%;
  flex-shrink: 0;
  //nothing to change here

  @media (min-width: ${breakpoints.tablet}) {
    /* border-radius: 16px 56px 0 0; */
  }

  @media (min-width: ${breakpoints.desktop}) {
    border-radius: 16px 0 0 56px;
    height: 336px;
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
  width: 50%;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
