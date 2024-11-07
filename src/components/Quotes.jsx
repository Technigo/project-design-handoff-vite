// Quotes.jsx

// import styled from "styled-components"
// import { QuotesP } from "../UI/Typography";


// const QuotesCard = styled.div`
// display: flex;
// margin: 0 auto;
// width: 20.625rem;
// height: 6.875rem;
// padding: 1rem;
// justify-content: center;
// align-items: center;
// gap: 0.625rem;
// border-radius: 1rem;
// background: #EEE7EB;

// opacity: ${({ isActive }) => (isActive ? 1 : 0)};
//   transform: ${({ isActive }) => (isActive ? "translateX(0)" : "translateX(100%)")};
//   transition: opacity 1s ease, transform 1s ease;
//   position: absolute; Se till att elementen överlappar varandra
//   width: 50%; /* Anpassa bredden efter behov */
// `

// export const Quotes = ({ quote, isActive }) => {
//   return (

//     <QuotesCard isActive={isActive}>
//       <QuotesP>{quote}</QuotesP>
//     </QuotesCard>

//   );
// };


import styled from "styled-components"
import { QuotesP } from "../UI/Typography";

const QuotesCard = styled.div`
  /* display: flex; */
  /* margin: 0 auto; */
  min-width: 300px;
  height: 6.875rem;
  padding: 1rem;
  /* justify-content: center;
  align-items: center; */
  /* gap: 0.625rem; */
  border-radius: 1rem;
  background: #EEE7EB;
  
  // Modified transition properties for smoother animation
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? "translateX(0)" : "translateX(100%)")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
`

export const Quotes = ({ quote, isActive }) => {
  return (
    <QuotesCard isActive={isActive}>
      <QuotesP>{quote}</QuotesP>
    </QuotesCard>
  );
};
