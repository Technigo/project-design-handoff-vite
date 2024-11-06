// Library.jsx

import styled from "styled-components";
import { Card } from "../components/Card";
import { H3 } from "../UI/Typography";
import { H2 } from "../UI/Typography";
import data from "../../cards.json";
import { Divider } from "../components/Divider";

const CardContainer = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
max-width: 655px;
// height: 427px;
align-items: flex-start;
align-content: flex-start;
gap: 22px 21px;
flex-shrink: 0;
flex-wrap: wrap;
overflow-x: auto;


`



export const Library = () => {
  return (
    <>

      <Divider><H2>Library</H2></Divider>
      <H3>In need of a temporary spell to help you through the day? Check out our library of commonly used spells. </H3>

      <CardContainer>
        {data.cards.map((card, index) => (
          <Card
            key={index}
            cardImage={card.image}
            cardText={card.text}
          />
        ))}
      </CardContainer>
    </>
  );
};