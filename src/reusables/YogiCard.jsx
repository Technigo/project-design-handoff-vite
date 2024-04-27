/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import element
import Element from "../../public/images/element.svg";

//import reusables
import { ParagraphOne } from "./ParagraphOne";

//styles
const CardSection = styled.section`
  /* height: 448px; */
  width: 260px;
  padding: 44px 16px 26px 16px;
`;

const PictureWrapper = styled.div`
  padding-bottom: 20px;
`;

const YogiElement = styled.div`
  background-image: url(${Element});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;
  width: 100%;
`;

const YogiPicture = styled.div`
  height: 190px;
  width: 260px;
  object-fit: contain;
`;

const YogiName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 6px;

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
      <YogiName>{name}</YogiName>
      <YogiClass>{teaching}</YogiClass>
      <ParagraphOne>{description}</ParagraphOne>
      <ReadMore>Read more</ReadMore>
    </CardSection>
  );
};
