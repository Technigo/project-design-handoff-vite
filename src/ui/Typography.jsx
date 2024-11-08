import styled from 'styled-components';

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
`
export const CarouselHeader = styled.h2`
font-family: "Roboto Serif";
font-size: 6rem;
font-style: italic;
font-weight: 600;
line-height: 140%;
color: black;
`
export const CarouselText = styled.p`
color: #000;
font-family: Inter;
font-size: 1rem;
font-style: italic;
font-weight: 500;
line-height: 140%;
margin-bottom: 0.62rem;
`
export const CarouselAuthor = styled.p`
color: #000;
font-family: Inter;
font-size: 1rem;
font-style: italic;
font-weight: 300;
line-height: 140%;
`
export const FooterTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const FooterText = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  text-align: left;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.8rem 0;
  }
`;

export const FooterSectionTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterContactInfo = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CircleText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CircleLabel = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const AchievementsTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
