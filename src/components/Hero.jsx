import styled from "styled-components";

const StyledHero = styled.section`
  margin-top: 177px;

  h1 {
    font-family: "Calistoga", serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 75px;
    letter-spacing: 7.2px;
  }
`;

export const Hero = () => {
  return (
    <StyledHero className="hero-section">
      <h1>Curve Pilates</h1>
      <button>Get Started</button>
      <ul className="customer-comments">
        <li>lalala</li>
      </ul>
    </StyledHero>
  );
};
