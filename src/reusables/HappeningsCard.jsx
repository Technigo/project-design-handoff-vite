/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import reusables
import { ButtonSmall } from "./ButtonSmall";

//styles
const CardSection = styled.section`
  background-color: pink;
`;

const PictureWrapper = styled.div``;

const Picture = styled.div``;

const IntroWrapper = styled.div`
  border: 2px solid white;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;

  @media all and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Date = styled.p`
  color: var(--primary-grey);
  font-size: 14px;

  @media all and (min-width: 744px) {
    font-size: 16px;
  }

  @media all and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const OutroWrapper = styled.div`
  border: 2px solid blue;
`;

const Description = styled.p`
  font-size: 14px;

  @media all and (min-width: 1024px) {
    font-size: 16px;
  }
`;

//component
export const HappeningsCard = ({ picture, title, date, description }) => {
  return (
    <CardSection>
      <PictureWrapper>
        <Picture>{picture}</Picture>
      </PictureWrapper>
      <IntroWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </IntroWrapper>
      <OutroWrapper>
        <Description>{description}</Description>
        <ButtonSmall>Sign up</ButtonSmall>
      </OutroWrapper>
    </CardSection>
  );
};
