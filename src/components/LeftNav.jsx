import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// import { Burger } from './Burger'

const DeskNav = styled.header`
  gap: 10px;
  display: none;
  @media (min-width: 1441px) {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #152019;
`

export const LeftNav = () => {
  return (
    <DeskNav>
      <StyledNavLink to="/">ABOUT ME</StyledNavLink>
      <StyledNavLink to="/">THE GYM</StyledNavLink>
      <StyledNavLink to="/">MEMBERSHIP</StyledNavLink>
      <StyledNavLink to="/">COACHING</StyledNavLink>
      {/* Add more NavLink components for other menu items */}
      {/* <Burger /> */}
    </DeskNav>
  )
}
