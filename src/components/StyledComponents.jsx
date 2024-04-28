import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 651px) and (max-width: 1024px) {
    padding: 0 var(--gap-medium);
  }

  @media (min-width: 1025px) {
    padding: 0 var(--gap-huge);
  }
`;

export const Page = styled.div`
  max-width: 100%;
  width: 100%;
  display: grid;
  background-color: var(--light-grey);
  padding: 0 var(--gap-compact);

  @media (min-width: 651px) and (max-width: 1024px) {
    padding: var(--gap-default) var(--gap-spacious);
  }

  @media (min-width: 1025px) {
    padding: 0 var(--gap-huge);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 15;
  object-fit: cover;

  @media (min-width: 651px) {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 349px) {
    display: none;
  }
`;

export const StyledText = styled.div`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  color: var(--blue);
  line-height: 25.6px;
  text-align: ${(props) => props.$textAlign || "left"};

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
    font-size: 48px;

    line-height: 55.44px;
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
    font-family: Yeseva One;
    font-size: 32px;
    line-height: 36.96px;
  }
`;

export const UnderlinedWord = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
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

  @media (min-width: 1025px) {
    padding: ${(props) => props.$padding || "0 0 var(--gap-huge) var(--gap-extra) "};
  }

  @media (min-width: 651px) and (max-width: 1024px) {
    padding: ${(props) => props.$padding || "0 var(--gap-compact) var(--gap-spacious) var(--gap-compact)"};
  }
`;
