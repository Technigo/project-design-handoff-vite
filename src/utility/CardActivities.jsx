import styled from "styled-components";
import Button from "./Button";
import { breakpoints } from "./breakpoints";

export const CardActivities = ({ imageSrc, title, description }) => (
  <CardWrapper>
    <CardImage src={imageSrc} alt={title} />
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
  width: 90%;
  height: 336px;
  flex-direction: row;
  padding: 0 80px;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
  padding: 0 40px;
  flex-direction: column;
}
`;

/* @media (max-width: ${breakpoints.mobile}) {
  padding: 240px 64px 32px;
}

@media (max-width: ${breakpoints.tablet}) {
  padding: 224px 64px;
  height: 544px;
} */

const CardImage = styled.img`
  border-radius: 16px 0 0 56px;
  width: 400px;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
 height: 320px;
 padding: 0px 16px;
  flex-direction: column;
}
`;

const CardInfo = styled.div`
  background-color: var(--yellow-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  border-radius: 0 56px 16px 0;
  border-top: 8px solid var(--yellow-medium);
  border-bottom: 8px solid var(--yellow-medium);
`;

const CardTitle = styled.h3`
  font-family: var(--header);
  font-size: 28px;
  font-weight: 500;
  line-height: 48px;
  color: var(--blue);
  margin: 0;
`;

const CardDescription = styled.p`
  color: var(--blue);
  font-family: var(--paragraph);
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.8px;
  margin-bottom: 40px;
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
