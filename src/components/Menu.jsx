import { useState } from 'react';
import styled from 'styled-components';
import menu from '../assets/menu.svg';

const MenuContainer = styled.div`
  position: relative;
  padding-right: 16px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const MenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #fdf8f5;
  }
`;

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}>
        <span>
          <img src={menu} alt="Menu" />
        </span>
      </MenuButton>
      <MenuDropdown $isOpen={isOpen}>
        <MenuItem>Om oss</MenuItem>
        <MenuItem>Kontakt</MenuItem>
        <MenuItem>Press</MenuItem>
      </MenuDropdown>
    </MenuContainer>
  );
};
