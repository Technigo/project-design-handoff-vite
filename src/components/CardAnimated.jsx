import styled, { keyframes } from "styled-components";
const animateCard = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
`;
const ParentContainer = styled.div`
  position: relative;
  animation: none;
  transform: scale(1);

  &:hover .card-title-external {
    display: none;
  }
  &:hover {
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
  }
  &:hover {
    animation: ${animateCard} 800ms ease-in;
  }
`;
const StyledContainer = styled.div`
  width: 325px;
  height: 200px;
  overflow: visible;
  transition: height 500ms ease;
  position: relative;

  .card-content {
    &:hover,
    &:focus-within {
      transform: scale(1.05);
    }
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    --padding: 1.5rem;
    padding: var(--padding);
    background-color: white;
    transition: opacity 0.5s ease, transform 1s ease;
    transform: translateY(0);
    opacity: 0;

    position: relative;
    top: 2px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    &:hover {
      opacity: 1;
      transform: translateY(20px);
    }
  }

  .card-title {
    position: relative;
    width: max-content;
    color: #000;

    font-family: Optima;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 125% */
  }

  .card-title::after {
    content: "";
    position: absolute;
    height: 4px;
    width: calc(100% + var(--padding));
    left: calc(var(--padding) * -1);
    top: 50%;
    background: var(--clr-accent-400);
    transform-origin: left;
    transition: transform 500ms ease;
    transform: translate(-50%, -50%) scaleX(0);
  }

  &:hover .card-title::after,
  &:focus-within .card-title::after {
    transform: translate(-50%, -50%) scaleX(1);
  }

  .card-body {
    color: var(--text);

    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
      transition-delay: 0ms !important;
    }
  }
`;

const StyledCard = styled.div`
  color: var(--clr-neutral-100);
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  padding: 0;
  width: 325px;
  height: 302px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 3s ease;

  position: relative;

  &:hover + ${StyledContainer} .card-content {
    opacity: 1;
    transform: translateY(20px);
  }

  &:hover + ${StyledContainer} .card-title::after {
    transform: translate(-50%, -50%) scaleX(1);
  }
`;
const H3 = styled.h3`
  color: #000;

  font-family: Optima;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  &:hover + ${StyledCard} + ${StyledContainer} {
    opacity: 0;
  }
`;

export const CardAnimated = ({ url, heading, text }) => {
  return (
    <ParentContainer>
      <H3 className="card-title-external">{heading}</H3>
      <StyledCard imgUrl={url}></StyledCard>
      <StyledContainer className="card-container">
        <div className="card-content">
          <h3 className="card-title">{heading}</h3>
          <p className="card-body">{text}</p>
        </div>
      </StyledContainer>
    </ParentContainer>
  );
};
