import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DeskNav = styled.nav`
  gap: 10px;
  display: none;
  justify-self: flex-start;

  @media (min-width: 1024px) {
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
  white-space: nowrap;

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
