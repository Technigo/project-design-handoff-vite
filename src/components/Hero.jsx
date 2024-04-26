import styled from 'styled-components'

import { NormalButton } from './Button'
import { NavBar } from './NavBar'

export const Hero = () => {
  return (
    <>
      <NavBar />
      <StyledHero>
        <h1>WELCOME TO YOUR WELLNESS ERA</h1>
        <NormalButton />
      </StyledHero>
    </>
  )
}

//Styled Components

const StyledHero = styled.div`
  height: 558px;
  width: 100vw;
  background-image: url(HeroPicture.svg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-position: center;

  @media screen and (min-width: 834px) {
    height: 504px;
    background-image: url(HeroTablet.svg);
  }

  @media screen and (min-width: 1440px) {
    background-image: url(HeroDesk.svg);
  }

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 46px;
    margin: 0 24px 20px 0;
    padding: 183px 0 0 0;
    align-self: center;
    width: 381px;

    @media screen and (min-width: 834px) {
      width: 640px;
      font-size: 30px;
      padding: 268px 0 0 0;
      margin: 0 24px;
    }

    @media screen and (min-width: 1440px) {
      padding: 265px 0 0 0;
    }
  }

  button {
    align-self: center;

    @media screen and (min-width: 834px) {
      margin-top: 49px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 48px;
    }
  }
`
