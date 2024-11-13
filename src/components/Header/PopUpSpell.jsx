/* eslint-disable react/prop-types */
import { Typography } from "../../ui/Typography"
import styled from "styled-components";
import sparkle from "../../assets/Sparkle.png";
import { useEffect } from "react";


const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: #EEE7EB;
  padding: 0.81rem 1rem 2.56rem 1rem;
  border-radius: 1.125rem;
  width: 328px;
  text-align: center;
  position: relative; 
  box-shadow: 0px 0px 8px 0px rgba(54, 12, 37, 0.50) inset, 8px 8px 8px 0px rgba(0, 0, 0, 0.25);
`;

const SparkleImg = styled.img`
position: absolute;
bottom: 1rem;
right:1rem;
 width: 2.74888rem;
height: 1.859rem;
transform: rotate(-7.732deg);
flex-shrink: 0;
`;

const SparkleImgTopLeft = styled.img`
  position: absolute;
  top: 0.4rem;
  left: 0.8rem;
  width: 2.4375rem;
  height: 1.6875rem;
  flex-shrink: 0;
`;

const SparkleImgTopLeftSmall = styled.img`
  position: absolute;
  top: 3rem; /* Slightly below the top left sparkle */
  left: 0.5rem;
  width: 1.65794rem; /* Smaller size */
  height: 1.12125rem;
  transform: rotate(36.278deg);
  flex-shrink: 0;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #000;
  cursor: pointer;
  font-size: 1rem; 
  font-weight: bold; 
`;

const PopupText = styled.p`  //Pop-up font-styling
color: #000;
text-align: center;
font-family: "Josefin Sans";
font-size: 1rem;
font-style: italic;
font-weight: 300;
line-height: 1.2rem;
`;



const heading3 = "Paper cut no more"
const popup = "By paper's edge, so sharp and sly,May fingers pass and never cry.With careful hands and nimble grace,Let no cut leave a single trace!"

export const PopUpSpell = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <Typography typography={heading3} level={3} />
        <PopupText>{popup}</PopupText>
        <CloseButton onClick={onClose}>X</CloseButton>
        <SparkleImgTopLeft src={sparkle} alt="Sparkle Icon Top Left" />
        <SparkleImgTopLeftSmall src={sparkle} alt="Smaller Sparkle Icon Below Top Left" />
        <SparkleImg src={sparkle} alt="Sparkle Icon Bottom Right" />
      </PopupContent>
    </PopupOverlay>
  );
};