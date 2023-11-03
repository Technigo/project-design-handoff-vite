import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
`

const FooterUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 17px;
  background-color: var(--secondary);
  list-style: none;

  @media (min-width: 394px) {
    gap: 21px;
  }
`

const FooterLink = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  color: #000000;
  font-size: 10px;
  font-weight: var(--text-weight-mobile);
  line-height: 12.11px;

  @media (min-width: 394px) {
    font-size: 15px;
    line-height: 18.17px;
  }

  @media (min-width: 835px) {
    font-size: var(--text-size-mobile);
    line-height: var(--text-height-mobile);
  }
}
`
const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  text-align: center;
  color: #000000;
  font-size: 10px;
  font-weight: var(--text-weight-mobile);
  line-height: 12.11px;

  @media (min-width: 394px) {
    font-size: 15px;
    line-height: 18.17px;
  }

  @media (min-width: 835px) {
    font-size: var(--text-size-mobile);
    line-height: var(--text-height-mobile);
  }
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterUl>
        <li>
          <StyledLink to="/contact">Contact Us</StyledLink>
        </li>
        <li>
          <FooterLink href="#">Privacy & Cookie Settings</FooterLink>
        </li>
        <li>
          <StyledLink to="/about">About Us</StyledLink>
        </li>
        <li>
          <FooterLink href="#">Language</FooterLink>
        </li>
      </FooterUl>
    </FooterWrapper>
  )
}
