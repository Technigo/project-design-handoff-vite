import styled from "styled-components";

import { NormalButton } from "./Button";
import { NavBar } from "./NavBar";

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
  width: 100%;
  background-image: url(HeroPicture.svg);
  //Hej, Izabel could you check how the picture is looking for you? I downloaded the big one but only see mobile size. Weird...
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 441px) {
    height: 504px;
    background-image: url(HeroTablet.svg);
    background-position: center;
  }

  @media screen and (min-width: 834px) {
    background-image: url(HeroDesk.svg);
  }

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 46px;
    margin: 0 24px;
    padding: 183px 0 0 0;

    @media screen and (min-width: 441px) {
      padding: 140px 0 0 0;
      width: 381px;
      align-self: center;
    }

    @media screen and (min-width: 834px) {
      width: 640px;
      font-size: 30px;
      padding: 268px 0 0 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 265px 0 0 0;
    }
  }

  button {
    margin-top: 45px;
    align-self: center;
    //There is just an auto margin between the text and the button. I tried to come close but maybe we need to ask Elin? Or do you see something in the design?

    @media screen and (min-width: 834px) {
      margin-top: 49px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 48px;
    }
  }
`;
