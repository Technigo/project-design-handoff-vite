import { BodyLarge } from "./Typography/BodyText";
import styled from "styled-components";
import Checkmark from "../assets/icons/checkmark.svg?react";

const doodleImages = [
  "/assets/doodle-0.png",
  "/assets/doodle-1.png",
  "/assets/doodle-2.png",
];

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 390px;
  height: 128px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StepItem = ({ text, index }) => {
  return (
    <>
      <StyledDiv>
        <Checkmark />
        <BodyLarge>{text[index]}</BodyLarge>
      </StyledDiv>
      <ImgContainer>
        <img src={doodleImages[index]} alt={`doodle ${index}`} />
      </ImgContainer>
    </>
  );
};
