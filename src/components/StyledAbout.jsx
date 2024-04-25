import styled, { createGlobalStyle } from "styled-components";
import Lotus from "../assets/lotus.svg";
import Buddha from "../assets/yoga.svg";
import Glasses from "../assets/drink.svg";

export const StyledAboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-compact);
  padding-bottom: 80px;
  margin-top: 25px;
`;

export const GlobalCarouselStyles = createGlobalStyle`

 .carousel .control-dots {
  position: absolute;
  bottom: -12px;
  margin:40px 0 ;
  width: 100%;
  display: flex;
  justify-content: center;
}

 .carousel .control-dots .dot {
    background: var(--dark-grey); 
    width: 12px;
    height: 12px;
    top: 1px;
    left: 1px;
 }

 .carousel .control-dots .dot.selected {
    background: var(--red);
    width: 12px;
    height: 12px;
    top: 1px;
    left: 1px;
 }
`;

export const LotusIcon = styled(Lotus)`
  width: 20px;
  height: 20px;
`;

export const BuddhaIcon = styled(Buddha)`
  width: 20px;
  height: 20px;
`;

export const GlassesIcon = styled(Glasses)`
  width: 20px;
  height: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-comfortable);
`;

export const AboutInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-compact);
`;

export const AboutTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-spacious);
`;

export const AboutTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AboutTwoImage = styled.img`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;
