import { NormalText } from "../../../reusableComp/NormalText";
import styled from "styled-components";

const LookingForMoreSection = styled.section`
background-color: #0021F5;
color: white;
display: flex;
flex-direction: column;
height: 232px;
padding: 24px 10px;
justify-content: center;
align-items: center;
gap: 10px;
`

//Create different sections for the text blocks
const lookingForMoreLine1 = "ARE YOU LONGING FOR MORE?"
const lookingForMoreLine2 = "With a daily sacred morning practice you can connect to your inner well of creativity, energy and with that focus"
const lookingForMoreLine3 = "BUILD YOUR VISIONS!"

export const LookingForMore = () => {
  return (
    <>
    <LookingForMoreSection>
    <NormalText text={lookingForMoreLine1} />
    <NormalText text={lookingForMoreLine2} />
    <NormalText text={lookingForMoreLine3} />
    </LookingForMoreSection>
    </>
  );
};

