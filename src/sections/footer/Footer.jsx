import styled from "styled-components";
import { LogoSection } from "./LogoSection";
import { FinePrintFooter } from "../../re-components/Typography";
import { SocialLinks, StartTodayButton } from "./SocialLinks";

//Det här är bara relevent om vi börjar styla hela footern. Finns padding i figmadesignen men verkar vara fel padding i SocialLinks isf
const FooterContainer = styled.div `
  background-color: ${({ theme }) => theme.backgrounds.highlight}; 
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      padding-top: 1.8rem;
      padding-left: 2.625rem;
      padding-right: 2.625rem;
    } 
`;

const FooterWrapper = styled.div`
background-color: ${({ theme }) => theme.backgrounds.highlight};
padding-top: ${({ theme }) => theme.spacing.small};
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
align-self: stretch;
`;

const FooterStyling = styled.div `
@media (min-width: ${({ theme }) => theme.breakpoints.large}) { 
 display: flex;
 flex-direction: column;
}
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <StartTodayButton/>
      <FooterStyling>
       <SocialLinks/>
      <LogoSection/>  
      </FooterStyling>
      <FooterWrapper>
        <FinePrintFooter>** Acts of kindness are highly contagious  © 2024</FinePrintFooter>
      </FooterWrapper>
    </FooterContainer>
  );
};