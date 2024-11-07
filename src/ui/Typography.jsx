import styled from "styled-components";

export const Headline1 = styled.h1`
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-weight: 700;
  line-height: 130%;
`;

export const Headline2 = styled.h2`
  text-align: center;
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
`;

export const Headline3 = styled.h3`
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`;

export const BodyText = styled.p`
  font-family: Roboto Serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 140%;
`;

export const BodyTextWithBackground = styled(BodyText)`
  background-color: rgba(0, 0, 0, 0.2); 
  font-style: italic;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: white;
`;

export const TextHeader = styled.p`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
`;

export const HeaderBig = styled.h1`
  grid-column: span 4;
  text-align: center;
  color: #FFF;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  font-family: Inter;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 130%;
`;

export const HeaderText = styled.p`
  font-family: Inter;
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  white-space: nowrap;
`;
