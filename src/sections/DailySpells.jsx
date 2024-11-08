// DailySpells.jsx
import styled from "styled-components"
import Witch from "../../public/images/HeaderImage/Witch.png";
import { H1 } from "../UI/Typography";
import { H3 } from "../UI/Typography";
import { Button } from "../ui/Button";
import { ButtonP } from "../UI/Typography";

const HeroSection = styled.section`
@media (min-width: 650px) {
display: flex;
flex: direction-row;
}
`

const WitchImage = styled.img`
width: 100%;
object-fit: cover;

@media (min-width: 650px) {
width: 40%;
}
`

export const DailySpells = () => {
  return (
    <HeroSection>
      <WitchImage src={Witch} alt="Witch" />
      <div>
        <H1>Daily Spells</H1>
        <H3 className="custom-margin">Your go-to guide for everyday magic</H3>

        <Button>
          <ButtonP>Spell generator</ButtonP>
        </Button>
      </div>
    </HeroSection>
  )
}
