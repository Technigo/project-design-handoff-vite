import styled from "styled-components";
import { Button } from "../Button"

const StyledSection = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(92, 22, 7, 0.15) 37%,
      rgba(51, 13, 3, 0.74) 88.29%,
      #220901 100%
    ),
    url("/images/hero-image.jpeg");
  height: 603px;
  background-size: cover;
  background-position: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    text-align: left;
  }

  h2 {
    text-align: center;
    color: white;
  }

  .hero-content{
    display: flex; 
    flex-direction: column; 
    margin: 0 24px; 
    gap: 32px; 
  }

  .button-wrapper {
    display: flex; 
    flex-direction: column; 
    gap: 16px; 
  }
`;

const textHeading1 = "Elevate your pregnancy with yoga";
const bodyText =
  "Allow your body to be the best it can be for the growing life within it to flourish";

export const Hero = () => {
  return (
    <>
      <StyledSection>
        <div className="hero-content">
        <h1>{textHeading1}</h1>
        <p>{bodyText}</p>
        <div className="button-wrapper">
        <Button>Book</Button>
        <Button secondary>Explore</Button>
        </div>
        </div>
      </StyledSection>
    </>
  );
};
