/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import element
import Element from "../../public/images/Element.svg";

//import reusables
import { ParagraphOne } from "./ParagraphOne";

//styles
const CardSection = styled.section`
  position: relative; // Required for absolute positioning within the card
`;

const YogiElement = styled.div`
  position: absolute; // Ensures it sits behind other elements
  z-index: 1;
  height: 448px;
  width: 260px; // Keep it behind other elements
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; // Fills the entire section
`;

const YogiPicture = styled.div`
  height: 200px;
  width: 200px;
  object-fit: cover; // Ensures the image is contained within the div
  position: absolute; // Required to position on top of YogiElement
  z-index: 2; // Keep it in the foreground
  top: -38px; // Adjust for placement
  left: 50%; // Center horizontally
  transform: translateX(-50%); // Centers the image
`;

const YogiName = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-align: center; // Align the text to center
  margin-top: 240px; // Adjust for spacing from the picture

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
  text-align: center; // Align the text to center

  @media all and (min-width: 744px) {
    font-size: 14px;
  }
  @media all and (min-width: 744px) {
    font-size: 16px;
  }
`;

//component
export const YogiCard = ({ picture, name, teaching, description }) => {
  return (
    <CardSection>
      <YogiElement>
        <img src={Element} alt="white background" />
        <YogiPicture>{picture}</YogiPicture>
      </YogiElement>
      <YogiName>{name}</YogiName>
      <YogiClass>{teaching}</YogiClass>
      <ParagraphOne>{description}</ParagraphOne>
    </CardSection>
  );
};
