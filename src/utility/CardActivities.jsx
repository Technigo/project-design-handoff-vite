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
      <CardDescription>{description}</CardDescription>
      <CardButton>
        Continue to Book
        <ArrowIcon />
      </CardButton>
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
  flex-direction: column;
  height: 600px;
}

@media (min-width: ${breakpoints.desktop}) {
  flex-direction: row;
  padding: 0 80px;
  height: 336px;
}
`;

const ImageWrapper = styled.div`
  width: 100%;
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
`

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    height: 320px;
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
  padding: 32px;
  border-radius: 0 16px 56px 0;
  border-left: 8px solid var(--yellow-medium);
  border-bottom: 8px solid var(--yellow-medium);
  padding: 32px 16px;

  @media (min-width: ${breakpoints.tablet}) {
 height: 320px;
 padding: 0px 16px;
  flex-direction: column;
}

@media (min-width: ${breakpoints.desktop}) {
 height: 320px;
 padding: 0px 16px;
  flex-direction: column;
  border-left: none;
  border-top: 8px solid var(--yellow-medium);
}
`;

const CardTitle = styled.h3`
  font-family: var(--header);
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: var(--blue);
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
}

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 28px;
    line-height: 48px;
}

`;

const CardDescription = styled.p`
  color: var(--blue);
  font-family: var(--paragraph);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.56px;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    letter-spacing: -0.72px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
    line-height: 40px;
    letter-spacing: -0.8px;
  }
`;

const CardButton = styled(Button)`
  display: flex;
  padding: 24px 48px;
  justify-content: center;
	align-self: flex-end;
	
  align-items: center;
  gap: 16px;
`;

const ArrowIcon = styled.span`
  width: 28px;
  height: 24px;
  background: url("/icons/arrow1.svg");
  background-size: contain;
  margin-left: 16px;
`;
