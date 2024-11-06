// Footer.jsx

import styled from "styled-components"
import { FooterP } from "../UI/Typography";

const FooterDiv = styled.div`
display: flex;
height: 3.5rem;
padding: 0.625rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
flex-shrink: 0;
background-color: black;

`

export const Footer = () => {
  return (
    <FooterDiv>
      <FooterP>The creator of these formulas is not responsible for any damage that may occur during use.</FooterP>
    </FooterDiv>
  )
}