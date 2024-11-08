// YourStyledComponentFile.js

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const H3 = styled.h3`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TextP = styled.p`
color: #000;
font-family: "Roboto Serif";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
    white-space: pre-line; 
    margin-left: 10px;
    padding: 16px;

`;
export const FooterP = styled.p`
  color: #000;
  font-family: "Roboto Serif", serif;
  font-size: 16px;
  font-style: normal;
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
