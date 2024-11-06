// Quotes.jsx

import styled from "styled-components"
import { QuotesP } from "../UI/Typography";


const QuotesCard = styled.div`
display: flex;
margin: 0 auto;
width: 20.625rem;
height: 6.875rem;
padding: 1rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 1rem;
background: #EEE7EB;


  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? "translateX(0)" : "translateX(100%)")};
  transition: opacity 1s ease, transform 1s ease;
`

export const Quotes = ({ quote, isActive }) => {
  return (

    <QuotesCard isActive={isActive}>
      <QuotesP>{quote}</QuotesP>
    </QuotesCard>

  );
};

