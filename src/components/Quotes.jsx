// Quotes.jsx

import styled from "styled-components";
import { QuotesP } from "../ui/Typography";

const QuotesCard = styled.div`
  height: 6.875rem;
  padding: 0.8rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.Box};
  
  // Modified transition properties for smoother animation
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? "translateX(0)" : "translateX(100%)")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};

  @media (min-width: 650px) { 
    height: 9rem;
  }
`;

export const Quotes = ({ quote, isActive }) => {
  return (
    <QuotesCard isActive={isActive}>
      <QuotesP>{quote}</QuotesP>
    </QuotesCard>
  );
};
