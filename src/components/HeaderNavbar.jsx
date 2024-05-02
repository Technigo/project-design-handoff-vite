import styled from "styled-components";
import navbarLogo from "../assets/heroSectionImages/navbarLogoBlack.png";
import { Dropdown } from "./Dropdown";

export const HeaderNavbar = () => {
  return (
    <>
      <Navbar>
        <NavbarLogo src={navbarLogo} />
        <Dropdown />
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavbarLogo = styled.img`
  height: 34.471px;
  width: 100px;
  flex-shrink: 1;
  margin-left: 24px;
  padding-top: 40px;
`;
