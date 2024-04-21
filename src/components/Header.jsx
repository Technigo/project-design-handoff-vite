import { Logo } from "./Logo";
import { Button } from "./Button";
import styled from "styled-components";
import { useState } from "react";
import { LeftNav } from "./LeftNav";
import { Burger } from "./Burger";
import { NavMenu } from "./NavMenu";

const StyledHeader = styled.header`
  box-sizing: border-box;
  padding: 40px 32px;
  display: flex;
  background-color: var(--60);
  position: relative;
  width: 100%;
  height: 112px;
  justify-content: space-between;
  align-items: center;
  img {
    align-self: center;
  }
  @media (min-width: 1440px) {
    display: flex;
    width: 1441px;
    padding: 40px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <StyledHeader>
      <LeftNav />
      <Burger toggleMenu={toggleMenu} />
      <NavMenu open={menuOpen} />
      <Logo />
      <Button />
    </StyledHeader>
  );
};
