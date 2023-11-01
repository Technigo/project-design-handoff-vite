import { SubHeading } from "../../../reusableComp/SubHeading";
import { NormalText } from "../../../reusableComp/NormalText";
import styled from "styled-components";

const KundaliniYogaSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
background: var(--cobalt, #0021F5);
color: white`

const kundaliniYogaNormalText = "Kundalini Yoga is all about transforming energy within yourself. When being a regular practitioner of Kundalini Yoga you have an efficient way of activating your life force and building up stamina to transform that amount of energy in your daily life."

export const KundaliniYoga = () => {
  return (
    <>
    <KundaliniYogaSection>
    <SubHeading text={"KUNDALINI YOGA"}/>
    <NormalText text={kundaliniYogaNormalText}/>
    </KundaliniYogaSection>
    </>
  );
};

//OBS GLÖM EJ TELL ME EVERYTHING
