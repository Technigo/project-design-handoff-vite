import styled from "styled-components";
import navbarLogo from "../assets/heroSectionImages/navbarLogoBlack.png";
import dropdownMenu from "../assets/heroSectionImages/menu.png";

export const HeaderNavbar = () => {
  return (
    <>
      <Navbar>
        <NavbarLogo></NavbarLogo>
        <NavbarMenu>
          Here goes a dropdown menu<br></br>
          It only shows when I add text inside this element
        </NavbarMenu>
      </Navbar>
    </>
  );
};

const Navbar = styled.div``;

const NavbarLogo = styled.div`
  background-image: url(${navbarLogo});
  background-repeat: no-repeat;
  height: 34.471px;
  flex-shrink: 1;
  padding-left: 24px;
  padding-top: 40px;
`;

const NavbarMenu = styled.div`
  background-image: url(${dropdownMenu});
`;
