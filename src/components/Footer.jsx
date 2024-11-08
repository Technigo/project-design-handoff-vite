// Footer.jsx

import styled from "styled-components"
import { FooterP } from "../ui/Typography";
import { FooterLink } from "../ui/Typography";

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  background-color: ${props => props.theme.colors.Font2};
`;

const FooterLinksRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <FooterP>The creator of these formulas is not responsible for any damage that may occur during use.</FooterP>
      <FooterLinksRight>
        <FooterLink href="www.google.com">Terms of use</FooterLink>
        <FooterLink href="www.google.com">About Daily spells</FooterLink>
      </FooterLinksRight>
    </FooterDiv>
  )
}
