// Library.jsx

import styled from "styled-components";
import { Card } from "../components/Card";
import data from "../../cards.json";

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
    <CardContainer>
      {data.cards.map((card, index) => (
        <Card
          key={index}
          cardImage={card.image}
          cardText={card.text}
        />
      ))}
    </CardContainer>
  );
};