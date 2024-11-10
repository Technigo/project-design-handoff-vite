
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


// Headings 
export const H1 = styled.h1`
  color: #000;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 130%; 
  margin-bottom: 16px;
`;

export const H2 = styled.h2`
  color: #000;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 130%;
  margin-top: 32px;
`;

export const H3 = styled.h3`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 24px;

  
`;

export const H4 = styled.h4`
color: #000;
text-align: center;
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 130%; 
`;

// Text 
export const TextP = styled.p`
color: #000;
font-family: "Roboto Serif";
font-size: 16px;
font-weight: 400;
line-height: 140%; 
white-space: pre-line; 
margin-left: 10px;
padding: 16px;

@media (min-width: 1024px) {
    text-align:center;
    
  }
`;

// Footer 
export const FooterP = styled.p`
  color: #000;
  font-family: "Roboto Serif", serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  padding:24px;

  @media (min-width: 1024px) {
   text-align: center;
   }

`;

export const FooterTitle = styled.p`
color: #000;
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 130%; 
margin-top: 82px;

@media (min-width: 1024px) {
   margin-left: 560px;
   }
`;

export const FooterInfo = styled.p`
color: #000;
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 130%; 
white-space: pre-line; 
padding: 10px 24px;
gap: 10px;  

@media (min-width: 1024px) {
   text-align: center;
   }
`;

// Quotes card

export const Quotes = styled.p`
color: #000;
font-family: Inter;
font-size: 16px;
font-weight: 500;
font-style: italic;
line-height: 140%; 
margin-top: -32px; 
`;

export const Author = styled.p`
 color: #000;
font-family: Inter;
font-size: 16px;
font-style: italic;
font-weight: 300;
line-height: 140%; 
margin-top: 10px;
margin-bottom: 32px;
`;

export const QuoteIcon = styled.p`
color: #000;
font-family: "Roboto Serif";
font-size: 96px;
font-style: italic;
font-weight: 600;
line-height: 140%; 
`;

// Achievments card 

export const Label = styled.div`
color: #000;
text-align: center;
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 140%; 
margin-left: 16px;
`;



