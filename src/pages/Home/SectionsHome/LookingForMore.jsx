import { NormalText } from "../../../reusableComp/NormalText";
import styled from "styled-components";

const LookingForMoreSection = styled.section`
background-color: #0021F5;
color: white;
`

const lookingForMoreNormalText = "ARE YOU LONGING FOR MORE? With a daily sacred morning practice you can connect to your inner well of creativity, energy and with that focus BUILD YOUR VISIONS!"

export const LookingForMore = () => {
  return (
    <>
    <LookingForMoreSection>
    <NormalText text={lookingForMoreNormalText} />
    </LookingForMoreSection>
    </>
  );
};
