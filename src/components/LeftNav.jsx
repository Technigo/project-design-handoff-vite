import { NavLink } from "react-router-dom";
import styled from "styled-components";

// import { Burger } from './Burger'

const DeskNav = styled.header`
  gap: 10px;
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--text);
  &:hover {
    color: var(--10);
  }
`;

export const LeftNav = () => {
  return (
    <DeskNav>
      <StyledNavLink to="/">ABOUT ME</StyledNavLink>
      <StyledNavLink to="/">THE GYM</StyledNavLink>
      <StyledNavLink to="/">MEMBERSHIP</StyledNavLink>
      <StyledNavLink to="/">COACHING</StyledNavLink>
    </DeskNav>
  );
};
