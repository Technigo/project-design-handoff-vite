import { SubHeading } from "../../../reusableComp/SubHeading";
import { NormalText } from "../../../reusableComp/NormalText";
import styled from "styled-components";

// Define styled component for the "KundaliniYogaSection" section.
const KundaliniYogaSection = styled.section`
display: flex;
padding-top: 40px;
flex-direction: column;
align-items: center;
gap: 40px;
background: var(--cobalt);
color: white;
`;

// Define a styled component for the "TellMeEverything" section.
const TellMeEverything = styled.div`
color: #FFF;
font-family: Metal Mania;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 187.5% */
text-decoration-line: underline;
`;

// Define the "kundaliniYogaNormalText" variable with a description of Kundalini Yoga.
const kundaliniYogaNormalText = `Kundalini Yoga is all about
transforming energy within yourself.
When being a regular practitioner of Kundalini Yoga,
you have an efficient way of activating your life force
and building up stamina to transform
that amount of energy in your daily life.`;



export const KundaliniYoga = () => {
  return (
    <>
    <KundaliniYogaSection>
    <SubHeading text={'KUNDALINI YOGA'}/>
    <NormalText text={kundaliniYogaNormalText}/>
    <TellMeEverything>
    Tell me EVERYTHING
    </TellMeEverything>
    </KundaliniYogaSection>
    </>
  );
};


