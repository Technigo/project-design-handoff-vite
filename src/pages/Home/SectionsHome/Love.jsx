import styled from "styled-components";
import LoveCarousel from "./LoveCarousel";

//Styling for the entire section
const LoveSection = styled.section`
background: var(--Marine, #141832);
color: white;
padding-top: 24px;
padding-bottom: 52px;
`;

//Styling for "Love"
const LoveSubheading = styled.div`
color: var(--fire);
text-align: center;
font-family: Metal Mania;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 100% */`


export const Love = () => {
  return (
    <>
    <LoveSection>
    <LoveSubheading>
      LOVE
    </LoveSubheading>
    <LoveCarousel />
    </LoveSection>
    </>
  );
};

