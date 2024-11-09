import { useState } from 'react';
import { Navigation } from "./Navigation"
import { Button } from "../../ui/Button"
import { Typography } from "../../ui/Typography"
import { PopUpSpell } from './PopUpSpell';
import witch from "../../assets/Witch.png"
import styled from "styled-components"


const HeaderFlex = styled.section`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    gap: 16px;   
    overflow-x: hidden;

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


export const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const title = "Daily spells"
  const bodyText = "Your go-to guide for everyday magic."


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
      {/* PopUpSpell */}
      {/* Render the SignUpPopup if isPopupOpen is true */}
      {isPopupOpen && <PopUpSpell onClose={togglePopup} />}
    </header>
  )
}
