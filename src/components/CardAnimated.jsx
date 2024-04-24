import styled, { keyframes } from 'styled-components'

const animateCard = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
`

const ParentContainer = styled.div`
  position: relative;

  &:hover .card-title-external {
    display: none;
  }

  &:hover .styled-container {
    display: block;
  }
`

const StyledContainer = styled.div`
  width: 325px;
  height: 200px;
  overflow: visible;
  transition: height 500ms ease;
  position: relative;
  display: none;

  .card-content {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    --padding: 1.5rem;
    padding: var(--padding);
    background-color: white;
    transition: opacity 0.5s ease, transform 1s ease;
    transform: translateY(0);
    opacity: 0;
    display: flex; /* Added */
    flex-direction: column; /* Added */

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
    content: '';
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
`

const StyledCard = styled.div`
  color: var(--clr-neutral-100);
  background-image: url(${(props) => props.url});
  background-size: cover;
  padding: 0;
  width: 325px;
  height: 302px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 3s ease;
  position: relative;

  &:hover {
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    animation: ${animateCard} 800ms ease-in;

    + .styled-container .card-content {
      opacity: 1;
      transform: translateY(20px);
    }

    + .styled-container .card-title::after {
      transform: translate(-50%, -50%) scaleX(1);
    }
  }
`

const H3 = styled.h3`
  color: #000;
  font-family: Optima;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`

export const CardAnimated = ({ url, heading, text }) => {
  return (
    <ParentContainer>
      <H3 className="card-title-external">{heading}</H3>
      <StyledCard url={url}></StyledCard>
      <StyledContainer className="styled-container">
        <div className="card-content">
          <h2 className="card-title">{heading}</h2>
          <p className="card-body">{text}</p>
        </div>
      </StyledContainer>
    </ParentContainer>
  )
}
