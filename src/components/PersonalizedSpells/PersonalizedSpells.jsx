/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Typography } from "../../ui/Typography";
import { CarouselCard } from "./CarouselCard"
import { Button } from "../../ui/Button"
import { useMediaQuery } from "./MediaQuery"
import { SignUpForm } from "./SignUpForm";
import styled from "styled-components";
import flower from "../../assets/Flower.png";
import sparkle from "../../assets/Sparkle.png"
/* import quotesData from "../../quotes.json" */


const CarouselBackground = styled.section`
    position: relative;
    margin: 50px 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PersBackgroundImage = styled.img`
    width: 100%;
    height: 70vh;
    position: absolute;
    z-index: -1;
    bottom: -100px;
    right: -140px;

    @media (min-width: 768px) {
        height: 80vh;
        width: 110%;
    }

    @media (min-width: 1200px) {
        height: 85vh;
        width: 80%;
        right: -390px;
    }
`;

const PersTitle = styled.section`
    display: flex;
    width: 100%;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #111010;
    color: #fff;
    z-index: 1;
`;

const PersInfoSection = styled.section`
    width: 295px;
    margin: 3rem auto 0;
    z-index: 1;

    @media screen and (min-width: 1200px) {
        width: 40rem;
        margin: 3rem auto;
    }
`;

const PersGrid = styled.section`
    display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  align-items: center;
  justify-content: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
  gap: 81px;
  overflow-x: ${({ isMobile }) => (isMobile ? 'hidden' : 'auto')};
  padding: 5rem 0;
  z-index: 1;
  max-width: 100%;

    /* display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: column;
    gap: 81px;
    overflow-x: auto;
    padding: 5rem 0;
    z-index: 1;

    @media (min-width: 768px) {
        grid-auto-flow: row;
    } */

    /* @media screen and (min-width: 1200px) {
        grid-auto-flow: column;
        padding: 12rem 0;
    }  */
`;



export const PersonalizedSpells = ({ quotesData }) => {
  const title = "Personalized Spells"
  const bodyText = "Unlock the magic within with spells crafted uniquely for your needs!"
  const heading3 = "Get your personalized spell"


/* Next quote function on mobil, media query to shoe all quotes in on row on ipad, desktops */
const [currentIndex, setCurrentIndex] = useState(0);
const isMobile = useMediaQuery("(max-width: 768px)");

      
// Handle click to see next quote
const handleNextQuote = () => {
    setCurrentIndex((prevIndex) => 
        prevIndex === quotesData.quotes.length - 1 ? 0 : prevIndex + 1
        );
    };
/* Next quote function */


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

  const SparkleImgBottomRight = styled.img`
  position: absolute;
  bottom: 20px;
  right: -5px;
  width: 2.74888rem;
  height: 1.859rem;
  transform: rotate(-7.732deg);
  flex-shrink: 0;
`;

  const SparkleImgBottomLeft = styled.img`
  position: absolute;
  bottom: 20px;
  left: 1.5rem;
  width: 2.45263rem;
  height: 2.72081rem;
  transform: rotate(-23.252deg);
  flex-shrink: 0;
`;

  const SparkleImgBottomLeftSmall = styled.img` //Smaller sparkle 
  position: absolute;
  bottom: 30px; /* Slightly below the top left sparkle */
  left: 0.5rem;
  width: 1.98213rem;
  height: 2.01444rem;
  transform: rotate(-1.26deg);
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
  const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

  const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
`;
  const Input = styled.input`
  padding: 0.5rem;
  width: 8.8125rem;
  height: 1.6875rem;
  flex-shrink: 0;
  border: 1px solid #ccc;
`;
  const StyledTextArea = styled.textarea`
  width: 17.9375rem;
  height: 5.6875rem;
  flex-shrink: 0;
  resize: none; /* Optional: Prevents resizing */
  padding: 0.5rem; /* Optional: Adds padding for better readability */
  border: 1px solid #ccc;
  margin-left: 0; 
`;

  const StyledLabel = styled.label`
  font-family: "Josefin Sans";  
  font-size: 0.875rem;  
  font-weight: 400;  
  color: #000;  
  margin-right: 5px;
`;

  const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align items to the right */
  gap: 0.5rem;  /* Add space between checkbox and text */
  margin-top: 1rem;  /* Add space between the other fields */
`;

  const CheckboxInput = styled.input`
  margin-left: 0;  
  width: 1.4375rem;
  height: 1.4375rem;
  flex-shrink: 0;
  border: 1px solid #000;
  background: #E1C9D8;
`;

  // State for popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  return (
    <CarouselBackground>
      <PersTitle id="personal-spells">
        <Typography typography="Personalized Spells" level={2} />
      </PersTitle>

      <PersInfoSection>
        <Typography typography="Unlock the magic within with spells crafted uniquely for your needs!" level={4} />
      </PersInfoSection>

      <div>
        <Button text="Get the power" onClick={togglePopup} />
      </div>


      <PersGrid isMobile={isMobile}>
      {isMobile ? (
          <>
            <CarouselCard
              key={currentIndex}
              text={quotesData.quotes[currentIndex].text}
            />
            <Button text="Next" isMobile={isMobile} onClick={handleNextQuote} />
          </>
        ) : (
          quotesData.quotes.map((quote, index) => (
            <CarouselCard key={index} text={quote.text} />
          ))
        )}
      </PersGrid>
    
      <PersBackgroundImage src={flower} alt="Flower in background" />
    </CarouselBackground>
  );
};