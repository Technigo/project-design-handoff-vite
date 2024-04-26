import styled from 'styled-components'
import arrow from '/arrow-circle.svg'

export const NormalButton = () => {
  return <StyledButton>Get started</StyledButton>
}

export const OrangeButton = () => {
  return <StyledButton $orange>Get started</StyledButton>
}

export const StickyButton = () => {
  return (
    <StyledButton $sticky $mobile $orange>
      Let&apos;s go!
      <img src={arrow} id="arrow" alt="arrow" />
    </StyledButton>
  )
}

export const StickyDesktopButton = () => {
  return (
    <StyledButton $sticky $orange $desktop>
      Let&apos;s get started!
      <img src={arrow} id="arrow" alt="arrow" />
    </StyledButton>
  )
}

//Styled Components

const StyledButton = styled.button`
  background-color: ${({ $orange }) => ($orange ? "#F4AB49" : "#FFFFFFD6")};
  width: ${({ $sticky }) => ($sticky ? "159px" : "85%")};
  border-radius: ${({ $sticky }) => ($sticky ? '100px' : '10px')};
  color: ${({ $orange }) => ($orange ? '#FFFFFF' : '#000000')};
  box-shadow: ${({ $orange }) => ($orange ? '5px 4px 4px #0000008f' : 'none')};
  margin: ${({ $sticky }) => ($sticky ? '0 24px 0 0' : '0 24px')};
  height: ${({ $sticky }) => ($sticky ? '47px' : '61px')};
  border: 0;
  font-size: ${({ $sticky }) => ($sticky ? '18px' : '21px')};
  font-weight: bold;
  position: ${({ $sticky }) => ($sticky ? 'sticky' : 'relative')};
  bottom: ${({ $sticky }) => ($sticky ? '24px' : '0')};
  float: ${({ $sticky }) => ($sticky ? 'right' : 'auto')};
  display: ${({ $sticky }) => ($sticky ? 'flex' : 'block')};
  align-items: ${({ $sticky }) => ($sticky ? 'center' : 'auto')};
  justify-content: ${({ $sticky }) => ($sticky ? 'center' : 'auto')};
  visibility: ${({ $desktop }) => ($desktop ? "hidden" : "visible")};
  
  &:hover{
    cursor: pointer;
    
  }

  #arrow{
    margin-left: 6px;
  }
  
  @media screen and (min-width: 441px) {
    width: ${({ $sticky }) => ($sticky ? "159px" : "381px")};
  }

  @media screen and (min-width: 834px) {
    width: ${({ $desktop }) => ($desktop ? "276px" : "574px")};
    float: ${({ $desktop }) => ($desktop ? 'right' : 'none')};
    visibility: ${({ $mobile }) => ($mobile ? "hidden" : "visible")};
    margin: ${({ $desktop }) => ($desktop ? '0 32px 0 0' : '0 24px')};
  }


  @media screen and (min-width: 1440px) {
    width: ${({ $desktop }) => ($desktop ? "276px" : "580px")};
    margin: ${({ $desktop }) => ($desktop ? '0 128px 0 0' : '0 24px')};
  }
  &:hover {
    background-color: ${({ $orange }) => ($orange ? '#FFFFFFD6' : '#827F7FB3')};
    color: ${({ $orange }) => ($orange ? '#F4AB49' : '#FFFFFF')};
    box-shadow: ${({ $sticky }) => ($sticky ? '5px 4px 4px #0000008f' : 'none')};
  }
`
