// DailySpells.jsx
import styled from "styled-components"
import Witch from "../../public/images/HeaderImage/Witch.png";
import { H1 } from "../UI/Typography";
import { H3 } from "../UI/Typography";
import { Button } from "../ui/Button";
import { ButtonP } from "../UI/Typography";

const WitchImage = styled.img`
width: 100%;
object-fit: cover;
`

export const DailySpells = () => {
  return (
    <div>
      <WitchImage src={Witch} alt="Witch" />
      <H1>Daily Spells</H1>
      <H3>Your go-to guide for everyday magic</H3>
      <Button><ButtonP>Spell generator</ButtonP></Button>
    </div>
  )
}