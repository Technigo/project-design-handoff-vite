// PersonalizedSpells.jsx
import styled from "styled-components"
import data from "../../quotes.json";
import { Quotes } from "../components/Quotes";
import { Divider } from "../components/Divider";
import { H2, H3 } from "../UI/Typography";
import { Button } from "../ui/Button";
import { ButtonP } from "../UI/Typography";

import { useState, useEffect } from "react"; //CGPT

const FooterFlower = styled.div`
  background: url('/images/FooterImage/Flower-new.png') right bottom / 390px 619px no-repeat;
`
const QuoteContainer = styled.div`
display: flex;
flex-direction: row;


`

export const PersonalizedSpells = () => {

  const [activeIndex, setActiveIndex] = useState(0); //CGPT
  // Automatisk rotation av citat
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.quotes.length);
    }, 3000); // Ändra varje 3 sekunder
    return () => clearInterval(interval); // Rensa intervallet när komponenten avmonteras
  }, [data.quotes.length]);


  return (

    <>
      <Divider><H2>Personalized spells</H2></Divider>
      <FooterFlower>

        <H3>In need of a temporary spell to help you through the day? Check out our library of commonly used spells. </H3>

        <Button><ButtonP>Get the power</ButtonP></Button>
        <QuoteContainer>
          {data.quotes.map((quote, index) => (
            <Quotes
              key={index}
              quote={quote.text}
              isActive={index === activeIndex}
            />
          ))}
        </QuoteContainer>
      </FooterFlower>
    </>
  );
};




