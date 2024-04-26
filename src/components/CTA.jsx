import styled from 'styled-components'

import { OrangeButton } from './Button'

export const CTA = () => {
  return (
    <StyledCTA>
      <h2>TRANSFORM YOUR LIFE IN JUST WEEKS!</h2>
      <OrangeButton />
    </StyledCTA>
  )
}

//Styled Components

const StyledCTA = styled.section`
  height: 504px;
  background-image: url(CTAImg.svg);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 441px) {
    background-image: url(CTATablet.svg);
    background-position: center;
  }

  @media screen and (min-width: 834px) {
    gap: 24px;
    background-image: url(CTADesk.svg);
  }

  @media screen and (min-width: 1440px) {
    gap: 42px;
  }

  h2 {
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    padding: 265px 0 0 0;
    //There is no fixed padding in the design for that. Should we check in with Elin?
    /* margin: 0 24px; */
    width: 272px;

    @media screen and (min-width: 834px) {
      width: 730px;
      padding: 315px 0 0 0;
    }

    @media screen and (min-width: 1440px) {
      font-size: 46px;
      width: 980px;
      text-align: center;
      padding: 250px 0 0 0;
    }
  }
`
