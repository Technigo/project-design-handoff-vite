// DailySpells.jsx
import styled from "styled-components";
import Witch from "../../public/images/HeaderImage/Witch.png";
import { H1 } from "../ui/Typography";
import { H3 } from "../ui/Typography";
import { Button } from "../ui/Button";
import { ButtonP } from "../ui/Typography";

const HeroSection = styled.section`
  @media (min-width: 650px) {
    display: flex;
    flex: direction-row;
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const HeroText = styled.div`
 @media (min-width: 650px) {
    margin-top: 40px;
  }
`;

const WitchImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 650px) {
    width: 40%;
  }
`;

export const DailySpells = () => {
  return (
    <HeroSection>
      <WitchImage src={Witch} alt="Witch" />
      <HeroText>
        <H1>Daily Spells</H1>
        <H3 className="custom-margin">Your go-to guide for everyday magic</H3>
        <Button>
          <ButtonP>Spell generator</ButtonP>
        </Button>
      </HeroText>
    </HeroSection>
  )
}
