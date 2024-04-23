import { Logo } from "./Logo";
import { Social } from "./Social";
import { Flags } from "./Flags";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: var(--30);
  color: var(--text-card-bg);
  padding: 24px 12px;
  width: 100%;

  @media all and (min-width: 744px) {
    padding: 32px;
  }

  @media all and (min-width: 1024px) {
    padding: 40px;
    display: grid;
    justify-items: center;
    grid-template-columns: 25% 50% 25%;
    grid-template-areas:
      "nav lo ."
      "nav fl ."
      "nav so ."
      "nav li ."
      "nav co .";

    p {
      grid-area: co;
      justify-self: center;
    }
  }
`;

const Nav = styled.nav`
  display: none;

  ul {
    list-style-type: none;
    padding-inline-start: 0;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--hover-login-links);
    }
  }

  @media all and (min-width: 744px) {
    display: initial;
  }

  @media all and (min-width: 1024px) {
    grid-area: nav;
    justify-self: flex-start;
    align-self: flex-start;

    ul {
      align-items: flex-start;
    }

    a {
      display: flex;
      width: 72px;
      height: 32px;
      padding: 2px 0px;
      align-items: center;
      white-space: nowrap;
    }
  }
`;

const LinkContainer = styled.div`
  a {
    font-size: 14px;
    display: inline;
    padding: 0.5rem;
    color: inherit;
    cursor: pointer;

    &:hover {
      color: var(--hover-login-links);
    }
  }
  @media all and (min-width: 1024px) {
    grid-area: li;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Logo $placement="footer" />
      <Nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/the-gym">The gym</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/persona-coaching">Personal coaching</Link>
          </li>
          <li>
            <Link to="/nutrition">Nutrition</Link>
          </li>
          <li>
            <Link to="/work">Work with me</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </Nav>
      <Flags $placement="footer" />
      <Social $placement="footer" />
      <LinkContainer>
        <Link to="/">Privacy Policies</Link>
        <Link to="/">Terms of Service</Link>
      </LinkContainer>
      <p>© 2024 Thrive Fitness, Inc. All rights reserved.</p>
    </StyledFooter>
  );
};
