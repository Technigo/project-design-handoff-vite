import { Logo } from './Logo'
import { Social } from './Social'
import { Flags } from './Flags'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: var(--30);
  color: var(--text-card-bg);
  padding: 24px 12px;

  @media all and (min-width: 744px) {
    padding: 32px;
  }
  @media all and (min-width: 1440px) {
  }
`

const Nav = styled.nav`
  display: none;

  @media all and (min-width: 744px) {
    display: initial;
  }
`

const NavList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--hover-login-links);
  }
`

const TermsLink = styled.a`
  font-size: 14px;
  display: inline;
  padding: 0.5rem;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: var(--hover-login-links);
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Nav>
        <NavList>
          <li>
            <NavLink href="#">Contact</NavLink>
          </li>
          <li>
            <NavLink href="#">About me</NavLink>
          </li>
          <li>
            <NavLink href="#">The gym</NavLink>
          </li>
          <li>
            <NavLink href="#">Membership</NavLink>
          </li>
          <li>
            <NavLink href="#">Personal coaching</NavLink>
          </li>
          <li>
            <NavLink href="#">Nutrition</NavLink>
          </li>
          <li>
            <NavLink href="#">Work with me</NavLink>
          </li>
          <li>
            <NavLink href="#">News</NavLink>
          </li>
        </NavList>
      </Nav>
      <Flags />
      <Social />
      <div>
        <TermsLink href="#">Privacy Policies</TermsLink>
        <TermsLink href="#">Terms of Service</TermsLink>
      </div>
      <p>© 2024 Thrive Fitness, Inc. All rights reserved.</p>
    </StyledFooter>
  )
}
