import styled from "styled-components";



const FooterSection = styled.footer`

background: #111010; 
width: 100%;
height: 3.6875rem;
flex-shrink: 0;

`;


export const Footer = () => {
  return (
    <FooterSection>
      <h2>Footer</h2>
    </FooterSection>
  );
};