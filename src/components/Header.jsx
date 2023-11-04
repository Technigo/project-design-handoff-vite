import { useState } from 'react';
import { HeaderWrapper, Logo, Menu, Hamburger, NavLink, NavList, BookButton, MobileNav, StyledLink } from './StyledComponents';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper>
      <Logo><StyledLink to="/">Yoga you</StyledLink></Logo>
      <Menu>
        <NavList>
          <NavLink><StyledLink to="/about">About</StyledLink></NavLink>
          <NavLink><StyledLink to="/classes">Classes</StyledLink></NavLink>
          <NavLink><StyledLink to="/studio">Studio</StyledLink></NavLink>
          <BookButton><StyledLink to="/book">Book</StyledLink></BookButton>
        </NavList>
        <Hamburger onClick={toggleMenu} />
      </Menu>
      <MobileNav open={isOpen}>
        <NavLink onClick={toggleMenu}><StyledLink to="/about">About</StyledLink></NavLink>
        <NavLink onClick={toggleMenu}><StyledLink to="/classes">Classes</StyledLink></NavLink>
        <NavLink onClick={toggleMenu}><StyledLink to="/studio">Studio</StyledLink></NavLink>
        <BookButton onClick={toggleMenu} style={{display: 'block'}}><StyledLink to="/book">Book</StyledLink></BookButton>
      </MobileNav>
    </HeaderWrapper>
  );
};
