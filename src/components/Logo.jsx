import styled from 'styled-components'
import mobileLogo from '/logo.svg'

const StyledLogo = styled.img`
  width: 43px;
  height: 72px;

  @media (min-width: 744px) and (max-width: 1440px) {
    width: 68px;
    height: 91px;
  }

  @media (min-width: 1440px) {
    width: 85px;
    height: 112px;
  }
`
export const Logo = () => {
  return (
    <>
      <StyledLogo src={mobileLogo} alt="Logo" />
    </>
  )
}
