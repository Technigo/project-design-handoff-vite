import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 651px) and (max-width: 1024px) {
    padding: 0 var(--gap-medium);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 15;
  object-fit: cover;

  @media (max-width: 349px) {
    display: none;
  }

  @media (min-width: 721px) and (max-width: 1024px) {
    width: 385px;
    height: 471px;
  }

  @media (min-width: 675px) and (max-width: 721px) {
    width: 285px;
    height: 371px;
  }

  @media (min-width: 651px) and (max-width: 674px) {
    width: 250px;
    height: 371px;
  }
`;

export const Page = styled.div`
  display: grid;
  background-color: var(--light-grey);
  padding: 0 var(--gap-compact);

  @media (min-width: 651px) and (max-width: 1024px) {
    padding: var(--gap-default) var(--gap-spacious);
  }

  @media (min-width: 1025px) {
    padding: var(--gap-huge);
  }
`;

export const StyledText = styled.div`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  color: var(--blue);
  line-height: 25.6px;

  @media (min-width: 651px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) {
  }
`;

export const StyledH1 = styled.div`
  font-family: Yeseva One;
  font-size: 24px;
  font-weight: 400;
  line-height: 27.72px;
  color: var(--blue);

  @media (min-width: 350px) and (max-width: 650px) {
  }

  @media (min-width: 651px) and (max-width: 1024px) {
    font-size: 32px;
    line-height: 36.96px;
  }

  @media (min-width: 1025px) {
  }
`;

export const StyledH2 = styled.h2`
  font-family: "Yeseva One", serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  color: var(--blue);

  @media (min-width: 350px) and (max-width: 650px) {
  }

  @media (min-width: 651px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 27.72px;
  }

  @media (min-width: 1025px) {
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$backgroundColor || "var(--red)"};
  color: ${(props) => props.$textColor || "white"};
  border: ${(props) => props.$border || "none"};
  padding: var(--gap-default) var(--gap-comfortable);
  font-family: "Lato", sans-serif;
  font-weight: 700;

  ${(props) =>
    props.$mobile &&
    css`
      font-size: 18px;
      flex: 1;
      line-height: 28.8px;
      letter-spacing: 0.5px;
    `}

  ${(props) =>
    props.$tablet &&
    css`
      font-size: 18px;
    `}

  ${(props) =>
    props.$desktop &&
    css`
      font-size: 20px;
    `}

  &:hover {
    border: 2px solid var(--blue);
  }

  &.about-button:hover {
    background-color: white;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  padding: ${(props) => props.$padding || "0 var(--gap-compact) var(--gap-compact) var(--gap-compact)"};
`;

/* header mobile
font-family: "Yeseva One", serif
font-size: 24px;
font-weight: 400;
font-style: normal;
color: 
#1C2996;
*/

/* 2 header mobile
font-family: "Yeseva One", serif
font-size: 20px;
font-weight: 400;
font-style: normal;
color: #F65135;
*/

/* header tablet
font-family: "Yeseva One", serif
font-size: 32px;
font-weight: 400;
font-style: normal;
color: 
#1C2996;
*/

/* 2 header tablet
font-family: "Yeseva One", serif
font-size: 24px;
font-weight: 400;
font-style: normal;
color: #F65135;
*/

/* header desktop
font-family: "Yeseva One", serif
font-size: 48px;
font-weight: 400;
font-style: normal;
color: 
#1C2996;
*/

/* 2 header desktop
font-family: "Yeseva One", serif
font-size: 32px;
font-weight: 400;
font-style: normal;
color: #F65135;
*/

/*
button mobil and tablet
 font-family: "Lato", sans-serif;
font-weight: 700;
font-size: 18px;

Radius: 8px;

Width: 312px;
Height: 72px;
*/

/*
button desktop
 font-family: "Lato", sans-serif;
font-weight: 700;
font-size: 20px;

Radius: 8px;

Width: 312px;
Height: 72px;
*/
