/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Typography } from "../../ui/Typography";
import { CarouselCard } from "./CarouselCard";
import { Button } from "../../ui/Button";
import { useMediaQuery } from "./MediaQuery";
import { SignUpForm } from "./SignUpForm";
import styled from "styled-components";
import flower from "../../assets/Flower.png";

const CarouselBackground = styled.section`
  position: relative;
  margin: 50px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px) {
    align-items: flex-start;
  }
`;

const PersBackgroundImage = styled.img`
  width: 100%;
  height: 50vh;
  position: absolute;
  z-index: -1;
  bottom: -100px;
  right: -140px;

  @media (min-width: 768px) {
    height: 60vh;
    width: 75%;
  }

  @media (min-width: 1200px) {
    height: 65vh;
    width: 75%;
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

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    padding: 1rem 2rem;
  }
`;

const PersInfoSection = styled.section`
  width: 295px;
  margin: 3rem auto 0;
  z-index: 1;

  @media screen and (min-width: 1048px) {
    width: 40rem;
    margin: 3rem 2rem;
  }
`;

const DivButton = styled.div`
    @media screen and (min-width: 1200px) {
        margin: 0 2rem;
    }
`

const PersGrid = styled.section`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  align-items: center;
  justify-content: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
  gap: 81px;
  overflow-x: ${({ isMobile }) => (isMobile ? 'hidden' : 'auto')};
  padding: 5rem 1rem;
  z-index: 1;
  max-width: 100%;

  @media screen and (min-width: 1200px) {
        margin: 0 auto;
    }
`;


export const PersonalizedSpells = ({ quotesData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Added state for current quote index
  const isMobile = useMediaQuery("(max-width: 768px)");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Automatically update quotes every 3 second. 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotesData.quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Interval for automatic quote rotation

    // Clear interval when component is unmounted. 
    return () => clearInterval(interval);
  }, [quotesData.quotes.length]); // Dependence on quotes data length for update

  return (
    <CarouselBackground>
      <PersTitle id="personal-spells">
        <Typography typography="Personalized Spells" level={2} />
      </PersTitle>

      <PersInfoSection>
        <Typography typography="Unlock the magic within with spells crafted uniquely for your needs!" level={4} />
      </PersInfoSection>

      <DivButton>
        <Button text="Get the power" onClick={togglePopup} />
      </DivButton>

      {/* Render the SignUpPopup if isPopupOpen is true */}
      {isPopupOpen && <SignUpForm onClose={togglePopup} />}

      <PersGrid isMobile={isMobile}>
        {isMobile ? (
          <CarouselCard
            key={currentIndex}
            text={quotesData.quotes[currentIndex].text}
          />
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
