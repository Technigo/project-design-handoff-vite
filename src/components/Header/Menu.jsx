import { styled } from 'styled-components';
import { useState } from 'react';

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Hamburger icon */}
      <HamburgerIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>

      {/* Menu content */}
      <MenuBox isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu}>X</CloseButton>
        <ul>
          <li><a href="/">Library</a></li>
          <li><a href="/#services">Personalized Spells</a></li>
          <li><a href="/#about">About Daily Spells</a></li>
          <li><a href="/#terms">Terms of use</a></li>
        </ul>
      </MenuBox>
    </div>
  );
};

// Styled components for Hamburger and Menu
const HamburgerIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem; /* Position the hamburger menu at the top-right */
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 4px;
  }
`;

const MenuBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
    text-align: center;
    margin-top: 3rem;
  }

  li {
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    &:hover {
      color: #A05042;
    }
  }

  /* Close Button (X) */
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }

  /* Desktop styling */
  @media (min-width: 1200px) {
    width: 1440px; /* Set the width for desktop */
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;
