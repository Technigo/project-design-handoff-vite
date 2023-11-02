import { NormalText } from "../../../reusableComp/NormalText";
import { SubHeading } from "../../../reusableComp/SubHeading";
import styled from "styled-components";

const LoveSection = styled.section`
background: var(--Marine, #141832);
color: white;
padding-top: 24px;
padding-bottom: 52px;
`;

const LoveSubheading = styled.div`
color: var(--fire);
text-align: center;
font-family: Metal Mania;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 100% */`

const LoveName = styled.div`
color: #FFF;
font-family: JetBrains Mono;
font-size: 16px;
font-style: normal;
font-weight: 800;
line-height: 30px;
text-align: center;
`


const LoveNormalText = "Having a daily Sadhana has totally changed my life. I am in love with my sacred morning practice."

export const Love = () => {
  return (
    <>
    <LoveSection>
    <LoveSubheading>
      LOVE
    </LoveSubheading>
    <NormalText text={LoveNormalText}/>
    <LoveName>
      Maria
    </LoveName>
    </LoveSection>
    </>
  );
};


//OBS LOVE ska vara i rött, lös även namnet i Bold.jsx