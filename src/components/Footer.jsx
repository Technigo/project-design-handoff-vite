import React from "react";
import styled from "styled-components";
import footerLogo from "/public/assets/logo-images/footer-logo.svg";


// Contenedor principal del Footer
const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 30px;
  position: relative;
`;

const FooterLogo = styled.img`
  width: 150px;
  height: 120px;
  flex-shrink: 0;
  position: absolute; 
  left: 0; 
  margin-left: 5px; 
`;

// Email y frase a la izquierda
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 180px;
`;

const EmailText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.7rem;
  
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
 
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

// Contenedor de iconos de redes sociales
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

// Icono individual de red social
const SocialMediaIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;


const TextBox = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 10px;
  flex-direction: column;
  
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      {/* Sección izquierda con email e ícono */}
      <LeftSection>
        <EmailText>thorondorskennel@gmail.com</EmailText>
        <IconTextWrapper>
          <p>THORONDORS KENNEL</p>
          <p>2024</p>
          <FooterLogo src={footerLogo} alt="Footer Logo" />
        </IconTextWrapper>
      </LeftSection>


      {/* Cuadro de texto a la derecha */}
      <RightSection>
        <TextBox><p>Friska och sunda</p>
          <p>hundar för aktiva liv</p></TextBox>
      </RightSection>
    </FooterContainer>
  );
};
