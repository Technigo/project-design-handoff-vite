import styled from "styled-components"
import { LogoSection } from "./LogoSection"
import { FinePrintFooter } from "../../re-components/Typography"
import { SocialLinks, StartTodayButton } from "./SocialLinks"

const FooterContainer = styled.div `
  background-color: ${({ theme }) => theme.backgrounds.highlight};
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
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

export const Footer = () => {
  return (
    <FooterContainer>
      <StartTodayButton/>
      <SocialLinks/>
      <LogoSection/>
      <FooterWrapper>
        <FinePrintFooter>** Acts of kindness are highly contagious  © 2024</FinePrintFooter>
      </FooterWrapper>
    </FooterContainer>
  )
}