// Footer.jsx

import React from "react";
import styled from "styled-components";
import { FooterP, FooterTitle, FooterInfo } from "../UI/Typography";

export const Footer = () => {
    return (
        <FooterContent>
            <FooterContainer>
                <Logo src="../Images/KC-logo.png" alt="Picture of Logo" />
                <FooterTitle>Kindness & Compassion</FooterTitle>
            </FooterContainer>

            <FooterP>
                Vi vill skapa en vänligare och mer inkluderande värld genom att skapa mötesplatser där människor kan mötas och prata om det som är viktigt på riktigt.
            </FooterP>

            <FooterP>
                Samtidigt skapar vi en rörelse av goda handlingar människor emellan för att sprida vänlighet, värme och hopp
            </FooterP>

            <FooterInfo>
                <strong>Om oss</strong>
                <div>Vår Vision</div>
                <div>Rörelsen Pay it forward</div>

                <strong>Engagera dig</strong>
                <div>Bli volontär</div>
                <div>Hitta din stödgrupp</div>

                <strong>Kontakta oss</strong>
                <div>info@kindnessandcompassion.se</div>
            </FooterInfo>

            <SocialIcons>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <SocialIcon src="../Images/facebook-icon.svg" alt="Facebook Icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <SocialIcon src="../Images/instagram-icon.svg" alt="Instagram Icon" />
                </a>
            </SocialIcons>
        </FooterContent>
    );
};

// Styled Components
const FooterContent = styled.div`
    background-color: #FFCAF8;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
`;

const FooterContainer = styled.footer`
    background-color: #FFCAF8;
    display: flex;
    width: 393px;
    align-items: center;
    padding: 24px 0;
`;

const Logo = styled.img`
    width: 78px;
    height: 78px;
    flex-shrink: 0;
`;

const SocialIcons = styled.div`
    display: flex;
    width: 393px;
    padding: 16px 24px;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 24px;
    flex-shrink: 0;
`;

const SocialIcon = styled.img`
    width: 24px; /* Adjust size if needed */
    height: 24px;
`;



export default Footer;
