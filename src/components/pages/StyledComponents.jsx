import styled, { css } from "styled-components";
/*import LogoMobile from "../assets/LogoMobile.svg";*/
/*import LogoTablet from "../assets/LogoTablet.svg";*/

export const Page = styled.div`
  display: grid;
  background-color: #f6f6f6;
`;
// export const MobileLogo = styled(LogoMobile)`
//   display: flex;
// `;

// export const TabletLogo = styled(LogoTablet)`
//   display: none;
// `;

export const StyledText = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  color: #1c2996;
`;

export const StyledH1 = styled.h1`
  font-family: Yeseva One;
  font-size: 24px;
  font-weight: 400;
  line-height: 27.72px;
  color: #1c2996;

  @media (min-width: 350px) and (max-width: 650px) {
  }

  @media (min-width: 651px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) {
  }
`;

export const StyledH2 = styled.h2`
  font-family: "Yeseva One", serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  color: #f65135;

  @media (min-width: 350px) and (max-width: 650px) {
  }

  @media (min-width: 651px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) {
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "#F65135"};
  color: ${(props) => props.textColor || "white"};
  padding: var(--gap-default) var(--gap-comfortable);
  border: none;
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

  &:focus {
    border: 2px solid #1c2996;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 var(--gap-compact) var(--gap-compact) var(--gap-compact);
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
