/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Typography } from "../../ui/Typography"
import styled from "styled-components"
import { CarouselCard } from "./CarouselCard";
import { Button } from "../../ui/Button";
import flower from "../../assets/Flower.png"
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
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: column;
    gap: 81px;
    overflow-x: auto;
    padding: 5rem 0;
    z-index: 1;

    @media (min-width: 768px) {
        grid-auto-flow: row;
    }

    @media screen and (min-width: 1200px) {
        grid-auto-flow: column;
        padding: 12rem 0;
    }
`;


/* const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`; */


export const PersonalizedSpells = ({ quotesData }) => {
  const title = "Personalized Spells"
  const bodyText = "Unlock the magic within with spells crafted uniquely for your needs!"
  const heading3 = "Get your personalized spell"


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

  // Toggle the popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  /* const [selectedSpell, setSelectedSpell] = useState(null);

  const handleCardClick = (spell) => {
      setSelectedSpell(spell);
  };

  const closePopup = () => {
      setSelectedSpell(null);
  }; */

  return (
    <CarouselBackground>
      <PersTitle id="personal-spells">
        <Typography typography={title} level={2} />
      </PersTitle>

      <PersInfoSection>
        <Typography typography={bodyText} level={4} />
      </PersInfoSection>
      <div>
        <Button text="Get the power" onClick={togglePopup} />

        {/* Conditional Popup Display */}
        {isPopupOpen && (
          <PopupOverlay onClick={togglePopup}>
            <PopupContent onClick={(e) => e.stopPropagation()}>
              <Typography typography={heading3} level={3} />
              <CloseButton onClick={togglePopup}>X</CloseButton>
              <SparkleImgBottomLeftSmall src={sparkle} alt="Sparkle Icon Bottom Left Smaller" />
              <SparkleImgBottomLeft src={sparkle} alt="Sparkle Icon Bottom Left" />
              <SparkleImgBottomRight src={sparkle} alt="Sparkle Icon Bottom Right" />

              {/* Signup Form */}
              <Form>
                <Fieldset>
                  <StyledLabel htmlFor="name">Name</StyledLabel>
                  <Input type="text" id="name" name="name" required />
                </Fieldset>
                <Fieldset>
                  <StyledLabel htmlFor="email">Email</StyledLabel>
                  <Input type="email" id="email" name="email" required />
                </Fieldset>
                <Fieldset>
                  <StyledLabel htmlFor="spellType">What do you wish for dear?</StyledLabel>
                  <StyledTextArea
                    id="wishText" // Links label to this textarea for accessibility
                    name="spellRequest" // Sets name for form submission
                    aria-required="true"  // Accessibility: Indicates the field is required
                    aria-describedby="wishTextHelp" // Links to help text for screen readers
                    required
                  />
                </Fieldset>
                <Fieldset>
                  <CheckboxContainer>
                    <StyledLabel htmlFor="agree">I accept the terms
                    </StyledLabel>
                    <CheckboxInput type="checkbox" id="agree" name="agree" required />
                  </CheckboxContainer>
                </Fieldset>
                <Button text="Request spell" type="submit" />
              </Form>
            </PopupContent>
          </PopupOverlay>
        )}
      </div>
      <PersGrid>
        {quotesData.quotes.map((quote, index) => (
          <CarouselCard
            key={index}
            text={quote.text}
          />
        ))}
      </PersGrid>

      <PersBackgroundImage src={flower} alt="Flower in background" />
    </CarouselBackground>

  );
};