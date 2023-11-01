import { NormalText } from "../../../reusableComp/NormalText";
import { SubHeading } from "../../../reusableComp/SubHeading";
import styled from "styled-components";

const LoveSection = styled.section`
background: var(--Marine, #141832);
color: white`

const LoveNormalText = "Having a daily Sadhana has totally changed my life. I am in love with my sacred morning practice."

export const Love = () => {
  return (
    <>
    <LoveSection>
    <SubHeading text={"LOVE"}/>
    <NormalText text={LoveNormalText}/>
    </LoveSection>
    </>
  );
};


//OBS LOVE ska vara i rött, lös även namnet i Bold.jsx