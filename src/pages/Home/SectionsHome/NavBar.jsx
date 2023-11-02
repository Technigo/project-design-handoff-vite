import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent; /* Set background to transparent */
  color: var(--cobalt); /* Set text color to var(--cobalt) */

  /* Media query for tablets */
  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: space-between;
  }

  /* Media query for mobile */
  @media (max-width: 480px) {
    padding: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  /* Media query for mobile (below 480px) */
  @media (max-width: 480px) {
    display: ${(props) => (props.mobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px; /* Adjust the top position as needed */
    left: 0;
    width: 100%;
    background: #333; /* Background color for the mobile menu */
    padding: 1rem;
  }

  /* Media query for tablet (768px) and larger */
  @media (min-width: 768px) {
    justify-content: flex-end; /* Move the items to the right */
  }
`;

const NavItem = styled.li``;



const CustomNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--cobalt); 

  /* Media query for mobile (below 480px) */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Text = styled.span`
  margin-left: 8px; /* Adjust the spacing as needed */
`;

const MobileMenuButton = styled.div`
display: none; /* Initially hidden on larger screens */
cursor: pointer;

/* Media query for tablets */
@media (max-width: 768px) {
  display: block; /* Always visible on tablets */
  order: 2; /* Move the icon to the right */
}

/* Media query for mobile (below 375px) */
@media (max-width: 375px) {
  display: block; /* Always visible on mobile */
  align-self: flex-end; /* Move the icon to the right */
}
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
    <NavMenu className={isMobileMenuOpen ? 'active' : ''}>
      <NavItem>
        <CustomNavLink to="/about">
          <Text>KUNDALINI YOGA</Text>
          <AiOutlineDown />
        </CustomNavLink>
      </NavItem>
      <NavItem>
        <CustomNavLink to="/">
          <Text>START WITH SADHANA</Text>
          <AiOutlineDown />
        </CustomNavLink>
      </NavItem>
    </NavMenu>
    <MobileMenuButton onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
    </MobileMenuButton>
  </NavbarContainer>
  );
};

export default Navbar;

//HAMBURGARMENYN ÄR KAOS och visas i lite olika storlekar just nu + kundalini menyn är till vänster och inte höger