import { FinePrintFooter } from "../../re-components/Typography"
import styled from "styled-components"
import { SocialLinks } from "./SocialLinks"

const FooterWrapper = styled.div`
background-color: ${({ theme }) => theme.backgrounds.highlight};
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
align-self: stretch;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks/>
      <FinePrintFooter>** Acts of kindness are highly contagious  © 2024</FinePrintFooter>
    </FooterWrapper>
  )
}