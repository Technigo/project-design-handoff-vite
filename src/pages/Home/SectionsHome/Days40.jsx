import { Button } from "../../../reusableComp/Button";
import { NormalText } from "../../../reusableComp/NormalText";
import { SubHeading } from "../../../reusableComp/SubHeading";
import styled from "styled-components";

const Days40Section = styled.section`
color: white;
background-color: var(--popping-orange);
display: flex;
width: 390px;
padding-top: 24px;
flex-direction: column;
align-items: center;
`

const daysP1 = "Doing lifestyle changes on your own takes a lot more of you than it needs to do."
const daysP2 = "With a daily morning practice with Kundalini Yoga you are aligning yourself with"
const daysP3 = "all of the magical energy from a golden lineage of teachers, practitioners and the Divine."
//FORTSÄTT MED TEXTEN

export const Days40 = () => {
  return (
    <>
    <Days40Section>
    <SubHeading text={"40 DAYS WITH ME"}/>
    <NormalText text={daysP1}/>
    <NormalText text={daysP2}/>
    <NormalText text={daysP3}/>
    <Button 
    className={"i-am-ready-btn"}
    btnText={"I AM READY, LET'S START"}/>
    </Days40Section>
    </>
  );
};
