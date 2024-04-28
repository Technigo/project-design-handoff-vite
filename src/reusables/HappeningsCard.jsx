/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import reusables
import { ButtonSmall } from "./ButtonSmall";

//styles
const CardSection = styled.section`
  padding: 18px 16px;
  background: var(--primary-white);
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  width: 295px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "img img intro intro intro intro"
    "outro outro outro outro outro outro";
  column-gap: 21px;

  @media all and (min-width: 744px) {
    background: none;
    grid-template-areas:
      "img img img intro intro intro"
      "img img img outro outro outro";
    column-gap: 42px;
    width: 90%;
  }

  @media all and (min-width: 1024px) {
    column-gap: 101px;
  }
`;

const Picture = styled.div`
  grid-area: img;
`;

const IntroWrapper = styled.div`
  grid-area: intro;
  padding-bottom: 16px;
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
  grid-area: outro;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 16px;

  @media all and (min-width: 744px) {
    justify-content: left;
  }
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
      <Picture>{picture}</Picture>
      <IntroWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </IntroWrapper>
      <OutroWrapper>
        <Description>{description}</Description>
        <ButtonWrapper>
          <ButtonSmall>Sign up</ButtonSmall>
        </ButtonWrapper>
      </OutroWrapper>
    </CardSection>
  );
};
