import React from "react";
import styled from "styled-components";
import footerLogo from "/public/assets/logo-images/footer-logo.svg";



const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 177px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  box-sizing: border-box;
`;

const FooterLogo = styled.img`
  width: 168px;
  height: 154px;
  flex-shrink: 0;
  top: 16px;
  left: 300px;
`;

// 
const TextBox = styled.div`
    width: 108px;
  line-height: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 7px;
  text-align: center;
    
`;




export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={footerLogo} alt="Footer Logo" />
      <TextBox>
        <p>THORONDOR'S KENNEL©2024</p>
      </TextBox>
    </FooterContainer>
  );
};
