// YourStyledComponentFile.js

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


// Headings 
export const H1 = styled.h1`
  color: #000;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
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
line-height: 140%; /* 22.4px */
    white-space: pre-line; 
    margin-left: 10px;
    padding: 16px;

`;
// Footer 
export const FooterP = styled.p`
  color: #000;
  font-family: "Roboto Serif", serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  padding:24px;
`;

export const FooterTitle = styled.p`
color: #000;
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 130%; /* 26px */
margin-top: 82px;
`;

export const FooterInfo = styled.p`
color: #000;
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 130%; /* 20.8px */
    white-space: pre-line; 
    padding: 10px 24px;
    gap: 10px;
    
`;

// Quotes card

export const Quotes = styled.p`
color: #000;
font-family: Inter;
font-size: 16px;
font-style: italic;
font-weight: 500;
line-height: 140%; 
margin-top: -32px; 
`;

export const Author = styled.p`
 color: #000;
font-family: Inter;
font-size: 16px;
font-style: italic;
font-weight: 250;
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

`;