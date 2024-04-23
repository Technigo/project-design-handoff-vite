import { NormalButton } from "./Button";
import { NavBar } from "./NavBar";
import styled from "styled-components";

export const Hero = () => {
  return (
    <>
      <NavBar />
      <StyledHero>
        <h1>WELCOME TO YOUR WELLNESS ERA</h1>
        <NormalButton />
      </StyledHero>
    </>
  );
};

//Styled Components

const StyledHero = styled.div`
  height: 558px;
  background-image: url(HeroImage.svg);
  background-repeat: no-repeat;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 46px;
    margin: 0 24px;
    letter-spacing: 11px;
    padding: 183px 0 0 0;
  }

  button {
    margin-top: 45px;
    //There is just an auto margin between the text and the button. I tried to come close but maybe we need to ask Elin? Or do you see something in the design?
  }
`;
