/* eslint-disable react/prop-types */
/* import { useState } from 'react'; */
import { Typography } from "../../ui/Typography"
import styled from "styled-components"
import { CarouselCard } from "./CarouselCard";
import { Button } from "../../ui/Button";
import flower from "../../assets/Flower.png"
/* import quotesData from "../../quotes.json" */

const CarouselBackground = styled.section`
    height: 719px;
    position: relative;
`;
/* const CarouselBackground = styled.section`
    background-image: url(${flower});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 719px;
`; */

const PersBackgroundImage = styled.img`
    max-width: 100%;
    height: auto;
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: -95px;
`;

const PersTitle = styled.section`
    display: flex;
    width: 100%;
    height: auto;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #111010;
    color: #fff;
`;

const PersInfoSection = styled.section`
    width: 295px;
    margin: 3rem auto;
`;

const PersGrid = styled.section`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: column;
    gap: 81px;
    overflow-x: auto;
    padding: 16px;

    /* @media screen and (min-width: 768px) {
        grid-template-rows: repeat(1, 1fr);
    } */
`;

/* const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`; */


export const PersonalizedSpells = ({ quotesData }) => {
  const title = "Personalized Spells"
  const bodyText = "Unlock the magic within with spells crafted uniquely for your needs!"

  /* const [selectedSpell, setSelectedSpell] = useState(null);

  const handleCardClick = (spell) => {
      setSelectedSpell(spell);
  };

  const closePopup = () => {
      setSelectedSpell(null);
  }; */

  return (
    <CarouselBackground>
      <PersTitle>
        <Typography typography={title} level={2} />
      </PersTitle>

      <PersInfoSection>
        <Typography typography={bodyText} level={4} />
        <Button text="Get the power" />
      </PersInfoSection>

      <PersGrid>
        {quotesData.quotes.map((quote, index) => (
          <CarouselCard
            key={index}
            text={quote.text}
          />
        ))}
      </PersGrid>

      <PersBackgroundImage src={flower} alt="Flower in background" width={600} />

    </CarouselBackground>

  );
};