import styled from "styled-components";
import headerLogo from "/public/assets/logo-images/header-logo.svg";

// Contenedor principal del header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 65px;
  flex-shrink: 0;
`;

// Contenedor del logo en imagen (a la izquierda)
const Logo = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;

// Contenedor de los menús
const MenuContainer = styled.nav`
  display: flex;
  gap: 1rem; /* Aumentar la separación entre los elementos del menú */
`;

// Estilos de cada menú
const MenuItem = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem; /* Espacio entre texto e icono */
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem 1rem; /* Relleno para mejorar la accesibilidad */
  font-size: 1rem;

  &:hover > div {
    display: block; /* Muestra el menú desplegable al pasar el cursor */
  }
`;

// Icono desplegable en SVG
const DropdownIcon = styled.svg`
  width: 12px;
  height: 7px;
  fill: ${({ theme }) => theme.colors.primary};
`;

const DropdownIconComponent = () => (
  <DropdownIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7">
    <path d="M5.61911 6.65852L0.158792 1.48701C-0.184066 1.16191 0.0572044 0.608032 0.546093 0.608032H11.4604C11.9429 0.608032 12.1842 1.16191 11.8413 1.48701L6.38101 6.66454C6.17149 6.86322 5.82863 6.86322 5.61276 6.66454L5.61911 6.65852Z" />
  </DropdownIcon>
);

// Contenedor de los menús desplegables
const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

// Estilo de los elementos dentro del desplegable
const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.font};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.neutral};
  }
`;

// Componente principal del header
export const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo en SVG a la izquierda */}
      <Logo>
        <img src={headerLogo} alt="Logo" />
      </Logo>

      {/* Menús a la derecha */}
      <MenuContainer>
        <MenuItem>Om oss</MenuItem>

        <MenuItem>
          Våra hundar <DropdownIconComponent />
          <Dropdown>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>
        </MenuItem>

        <MenuItem>Din valp</MenuItem>

        <MenuItem>
          Thorondor&apos;s familij <DropdownIconComponent />
          <Dropdown>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>
        </MenuItem>

        <MenuItem>
          Tidigare kullar <DropdownIconComponent />
          <Dropdown>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>
        </MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};
