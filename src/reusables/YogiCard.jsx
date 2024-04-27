/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import element
import Element from "../../public/images/element.svg";

//import reusables
import { ParagraphOne } from "./ParagraphOne";

//styles
const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 16px 26px 16px;

  @media all and (min-width: 744px) {
    padding: 49px 20px 26px 20px;
  }
`;

const PictureWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;

  @media all and (min-width: 744px) {
    /* width: 200px; */
  }
`;

const YogiElement = styled.div`
  background-image: url(${Element});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;
  width: 100%;
`;

const YogiPicture = styled.div`
  /* height: 190px;
  width: 260px; */
  width: auto;
  object-fit: contain;

  @media all and (min-width: 744px) {
    /* width: 200px; */
    object-fit: scale-down;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
`;
const YogiName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 6px;
  text-align: left;

  @media all and (min-width: 744px) {
    font-size: 14px;
  }

  @media all and (min-width: 744px) {
    font-size: 20px;
  }
`;

const YogiClass = styled.h4`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 6px;

  @media all and (min-width: 744px) {
    font-size: 14px;
  }
  @media all and (min-width: 744px) {
    font-size: 16px;
  }
`;

const ReadMore = styled.p`
  font-size: 14px;
  text-align: left;
  color: var(--primary-grey);
  padding-top: 20px;

  @media all and (min-width: 1024px) {
    font-size: 16px;
  }
`;

//component
export const YogiCard = ({ picture, name, teaching, description }) => {
  return (
    <CardSection>
      <PictureWrapper>
        <YogiElement>
          <YogiPicture>{picture}</YogiPicture>
        </YogiElement>
      </PictureWrapper>
      <TextWrapper>
        <YogiName>{name}</YogiName>
        <YogiClass>{teaching}</YogiClass>
        <ParagraphOne>{description}</ParagraphOne>
        <ReadMore>Read more</ReadMore>
      </TextWrapper>
    </CardSection>
  );
};
