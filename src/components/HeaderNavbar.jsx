import styled from "styled-components";
import navbarLogo from "../assets/heroSectionImages/navbarLogoBlack.png";
import dropdownMenu from "../assets/heroSectionImages/menu.png";

export const HeaderNavbar = () => {
  return (
    <>
      <Navbar>
        <NavbarLogo></NavbarLogo>
        <NavbarMenu></NavbarMenu>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavbarLogo = styled.div`
  background-image: url(${navbarLogo});
  background-repeat: no-repeat;
  height: 34.471px;
  width: 100px;
  flex-shrink: 1;
  margin-left: 24px;
  padding-top: 40px;
`;

const NavbarMenu = styled.div`
  background-image: url(${dropdownMenu});
  background-repeat: no-repeat;
  background-position: right;
  width: 50px;
  margin-bottom: 50px;
  margin-right: 24px;
`;
