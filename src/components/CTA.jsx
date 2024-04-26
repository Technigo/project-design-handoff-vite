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
  width: 100%;
  background-image: url(CTAImg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  background-position: center;

  @media screen and (min-width: 834px) {
    background-image: url(CTATablet.svg);
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 42px;
    background-image: url(CTADesk.svg);
  }

  h2 {
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    padding: 265px 0 0 0;
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
