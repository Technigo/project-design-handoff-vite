import { useState } from 'react';
import { Navigation } from "./Navigation"
import { Button } from "../../ui/Button"
import { Typography } from "../../ui/Typography"
import witch from "../../assets/Witch.png"
import styled from "styled-components"


const HeaderFlex = styled.section`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    gap: 16px;   
    overflow-x: hidden;
    margin-bottom: 8rem; 

    @media (min-width: 768px) {
    flex-direction: row; 
    margin-bottom: 0; 

    }
`;

const HeaderImg = styled.img`
    max-width: 100%;    
    width: 24.375rem;
    height: auto;


    //Tablet
    @media (min-width: 768px) {
    position: absolute; 
    left: -20px;
    top: 0;
  }

     //Desktop styling
     @media (min-width: 1200px) {
      width: 32.60988rem;

    }
    
`;

const HeaderContent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    width: 18.75rem;

     //Desktop styling
     @media (min-width: 1200px) {
      width: 42rem;
      margin: 8rem 0rem 0rem 10rem; 

    }
    
`;

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
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  position: relative; 
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #000;
  cursor: pointer;
  font-size: 2rem; 
`;

export const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const title = "Daily spells"
  const bodyText = "Your go-to guide for everyday magic."
  const heading3 = "Paper cut no more"
  const popup = "By paper's edge, so sharp and sly,May fingers pass and never cry.With careful hands and nimble grace,Let no cut leave a single trace!"

  // Toggle the popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header>
      <Navigation />
      {/* <Menu /> */}
      <HeaderFlex>
        <HeaderImg src={witch} alt="Witch Image" className="witch" />
        <HeaderContent>
          {/* Heading 1 */}
          <Typography typography={title} level={1} />

          {/* Body Text */}
          <Typography typography={bodyText} level={4} />
          {/* Button Component */}
          <Button text="Spell generator" onClick={togglePopup} />
        </HeaderContent>
      </HeaderFlex>
      {/* Conditional Popup Display */}
      {isPopupOpen && (
        <PopupOverlay onClick={togglePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <Typography typography={heading3} level={3} />
            <Typography typography={popup} level={7} />
            <CloseButton onClick={togglePopup}>X</CloseButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </header>
  )
}
