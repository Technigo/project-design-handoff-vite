/* eslint-disable react/prop-types */
/* import { useState } from 'react'; */
import { Typography } from "../../ui/Typography"
import styled from "styled-components"
import { CarouselCard } from "./CarouselCard";
import { Button } from "../../ui/Button";
import flower from "../../assets/Flower.png"
/* import quotesData from "../../quotes.json" */


const CarouselBackground = styled.section`
    position: relative;
    margin: 50px 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PersBackgroundImage = styled.img`
    width: 100%;
    height: 70vh;
    position: absolute;
    z-index: -1;
    bottom: -100px;
    right: -140px;

    @media (min-width: 768px) {
        height: 80vh;
        width: 110%;
    }

    @media (min-width: 1200px) {
        height: 85vh;
        width: 80%;
        right: -390px;
    }
`;

const PersTitle = styled.section`
    display: flex;
    width: 100%;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #111010;
    color: #fff;
    z-index: 1;
`;

const PersInfoSection = styled.section`
    width: 295px;
    margin: 3rem auto 0;
    z-index: 1;

    @media screen and (min-width: 1200px) {
        width: 40rem;
        margin: 3rem auto;
    }
`;

const PersGrid = styled.section`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: column;
    gap: 81px;
    overflow-x: auto;
    padding: 5rem 0;
    z-index: 1;

    @media (min-width: 768px) {
        grid-auto-flow: row;
    }

    @media screen and (min-width: 1200px) {
        grid-auto-flow: column;
        padding: 12rem 0;
    }
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
      <PersTitle id="personal-spells">
        <Typography typography={title} level={2} />
      </PersTitle>

      <PersInfoSection>
        <Typography typography={bodyText} level={4} />
      </PersInfoSection>

      <Button text="Get the power" />

      <PersGrid>
        {quotesData.quotes.map((quote, index) => (
          <CarouselCard
            key={index}
            text={quote.text}
          />
        ))}
      </PersGrid>

      <PersBackgroundImage src={flower} alt="Flower in background" />

    </CarouselBackground>

  );
};
