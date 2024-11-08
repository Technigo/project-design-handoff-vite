// Header.jsx

import styled from "styled-components"
import BurgerMenu from "../../public/images/burgermeny.png";

const HeaderDiv = styled.header`
  display: flex;
  height: 3.5rem;
  padding: 0.625rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  background-color: ${props => props.theme.colors.Font2};

  img {
    width: 48px;
    height: 36px;
  }

  @media (min-width: 650px) {
  background-color: transparent;
  }
`

export const Header = () => {
  return (
    <HeaderDiv>
      <img src={BurgerMenu} alt="Hamburger menu icon" />
    </HeaderDiv>
  )
}
