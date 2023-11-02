import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Menu, Hamburger, NavLink, NavList, BookButton, MobileNav } from './StyledComponents';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper>
      <Logo><Link to="/">Yoga you</Link></Logo>
      <Menu>
        <NavList>
          <NavLink><Link to="/about">About</Link></NavLink>
          <NavLink><Link to="/classes">Classes</Link></NavLink>
          <NavLink><Link to="/studio">Studio</Link></NavLink>
        </NavList>
        <BookButton><Link to="/book">Book</Link></BookButton>
        <Hamburger onClick={toggleMenu}>☰</Hamburger>
      </Menu>
      <MobileNav open={isOpen}>
        <NavLink onClick={toggleMenu}><Link to="/about">About</Link></NavLink>
        <NavLink onClick={toggleMenu}><Link to="/classes">Classes</Link></NavLink>
        <NavLink onClick={toggleMenu}><Link to="/studio">Studio</Link></NavLink>
        <BookButton onClick={toggleMenu} style={{display: 'block'}}><Link to="/book">Book</Link></BookButton>
      </MobileNav>
    </HeaderWrapper>
  );
};
