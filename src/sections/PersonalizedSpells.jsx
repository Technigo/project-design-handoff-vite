// PersonalizedSpells.jsx
// import styled from "styled-components"
// import data from "../../quotes.json";
// import { Quotes } from "../components/Quotes";
// import { Divider } from "../components/Divider";
// import { H2, H3 } from "../UI/Typography";
// import { Button } from "../ui/Button";
// import { ButtonP } from "../UI/Typography";

// import { useState, useEffect } from "react"; //CGPT

// const FooterFlower = styled.div`
//   background: url('/images/FooterImage/Flower-new.png') right bottom / 390px 619px no-repeat;
// `
// const QuoteContainer = styled.div`
// display: flex;
// flex-direction: row;


// `

// export const PersonalizedSpells = () => {

//   const [activeIndex, setActiveIndex] = useState(0); //CGPT
//   // Automatisk rotation av citat
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % data.quotes.length);
//     }, 3000); // Ändra varje 3 sekunder
//     return () => clearInterval(interval); // Rensa intervallet när komponenten avmonteras
//   }, [data.quotes.length]);


//   return (

//     <>
//       <Divider><H2>Personalized spells</H2></Divider>
//       <FooterFlower>

//         <H3>In need of a temporary spell to help you through the day? Check out our library of commonly used spells. </H3>

//         <Button><ButtonP>Get the power</ButtonP></Button>
//         <QuoteContainer>
//           {data.quotes.map((quote, index) => (
//             <Quotes
//               key={index}
//               quote={quote.text}
//               isActive={index === activeIndex}
//             />
//           ))}
//         </QuoteContainer>
//       </FooterFlower>
//     </>
//   );
// };


// PersonalizedSpells.jsx
import styled from "styled-components"
import data from "../../quotes.json";
import { Quotes } from "../components/Quotes";
import { Divider } from "../components/Divider";
import { H2, H3 } from "../UI/Typography";
import { Button } from "../ui/Button";
import { ButtonP } from "../UI/Typography";
import { useState, useEffect } from "react";

const FooterFlower = styled.div`
  background: url('/images/FooterImage/Flower-new.png') right bottom / 390px 619px no-repeat;
  min-height: 740px;
`

const QuoteContainer = styled.div`
  position: relative;
  height: 20.875rem; // Match the height of QuotesCard
  min-width:300px;
  max-width: 330px;
  margin: 0 auto;
  overflow: hidden; // Ensure out-of-view quotes don't show
  padding-top: 170px;
  padding-bottom: 200px;


    /* Media query för mobil 320px */
    @media (min-width: 320px) and (max-width: 390px) {
    /* Justerar marginalen för mindre skärmar */
    width:200px;
  width: 230px;
  }
`




export const PersonalizedSpells = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.quotes.length);
        setIsTransitioning(false);
      }, 500); // Match this with the transition duration in QuotesCard
    }, 5000); // Show each quote for 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Divider><H2>Personalized spells</H2></Divider>
      <FooterFlower>
        <H3>Unlock the magic within with spells crafted uniquely for your needs!</H3>
        <Button><ButtonP>Get the power</ButtonP></Button>
        <QuoteContainer>
          {data.quotes.map((quote, index) => (
            <Quotes
              key={index}
              quote={quote.text}
              isActive={index === activeIndex && !isTransitioning}
            />
          ))}
        </QuoteContainer>
      </FooterFlower>
    </>
  );
};

