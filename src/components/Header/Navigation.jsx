import { useState } from 'react';
import { Menu } from "./Menu"
import styled from "styled-components";

const Nav = styled.nav`

background: #111010; 
width: 100%;
height: 3.6875rem;
flex-shrink: 0;

 //Desktop styling
 @media (min-width: 768px) {
    background: transparent;
    
    }
`;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menu component will show when isMenuOpen is true */}
      <Menu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </Nav>
  );
};