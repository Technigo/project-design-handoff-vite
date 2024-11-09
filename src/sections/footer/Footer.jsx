import styled from "styled-components"
import { LogoSection } from "./LogoSection"
import { FinePrintFooter } from "../../re-components/Typography"
import { SocialLinks } from "./SocialLinks"

const FooterWrapper = styled.div`
background-color: ${({ theme }) => theme.backgrounds.highlight};
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
align-self: stretch;
`;



export const Footer = () => {
  return (
    <>
    <SocialLinks/>
    <LogoSection/>
    <FooterWrapper>
      <FinePrintFooter>** Acts of kindness are highly contagious  © 2024</FinePrintFooter>
    </FooterWrapper>
    </>

  )
}