// Library.jsx

import styled from "styled-components";
import { Card } from "../components/Card";
import { H3 } from "../ui/Typography";
import { H2 } from "../ui/Typography";
import data from "../../cards.json";
import { Divider } from "../components/Divider";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 655px;
  gap: 22px 21px;
  flex-shrink: 0;
  flex-wrap: wrap;
  overflow-x: auto;
  padding: 0 0 77px 18px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 650px) {
  justify-items: center;
  padding: 0 0 77px 0;
  margin: 0 auto;
  width: 100%;
  }
`;

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
