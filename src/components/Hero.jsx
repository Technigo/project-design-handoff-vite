import styled from "styled-components";

const StyledHero = styled.section`
  font-family: "AvenirMedium", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 177px;

  .web-title {
    position: relative;
  }

  .web-title-logo {
    position: absolute;
    top: 36%;
    left: 6%;
  }

  h1 {
    margin-top: 100px;
    font-family: "Calistoga", serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 75px;
    letter-spacing: 7.2px;
  }

  h2 {
    color: #000;

    font-family: "AvenirMedium", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  li {
    list-style-type: none;
  }
`;

export const Hero = () => {
  return (
    <StyledHero className="hero-section">
      <div className="web-title">
        <img
          className="web-title-logo"
          src="./curve.png"
          alt="web-title-logo"
        />
        <h1>Curve Pilates</h1>
      </div>
      <h2>Wellness and Movement</h2>
      <button>Get Started</button>
      <ul className="customer-comments">
        <li>lalala</li>
      </ul>
    </StyledHero>
  );
};
