//Bild, backbutton och what if you could här?

import { NormalText } from "../../../reusableComp/NormalText";
import { SubHeading } from "../../../reusableComp/SubHeading";
import styled from "styled-components";
import { BackButton } from "./BackButton";

const WhatIfYouCouldSection = styled.section`
background-color: var(--marine);
color: white;
`
const whatIfP1 = "I am Petra and the meaning of Petra is rock or stone. "
const whatIfP2 = "I am a 2/4 Triple split Emotional Generator which means that I am always looking for energy that could ignite and match my passion for building better versions. "


export const WhatIfYouCould = () => {
  return (
    <>
    <WhatIfYouCouldSection>
    <BackButton />
    <div>
          <img
          src="./images/Petra.webp"
          alt="Shakti. The divine feminine cosmic energy"
          width="381px"
          height="323px"
          />
      </div>
    <SubHeading text={"WHAT IF YOU COULD:"} />
    <NormalText text={whatIfP1}/>
    <NormalText text={whatIfP2}/>

    </WhatIfYouCouldSection>
    </>
  )
}
