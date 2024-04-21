import styled from "styled-components";
//import images
import CobraPose from "../../public/images/cobrapose.png";
import Location from "../../public/icons/location.png";

//import reusables
import { Button } from "../reusables/Button";
import { Logo } from "../reusables/Logo";

//styles
const HeaderContainer = styled.section`
  position: relative; //allows absolute positioning for children
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 16px 68px 16px;
`;

const HeaderNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HeaderImage = styled.img`
  position: absolute;
  /* width: 827px; */
  width: 100%;
  /* object-fit: cover; */
  object-fit: contain;
  height: 524px;
  top: -93px;
  /* left: -274px; */
  /* right: -50px; */
  z-index: 1; //places image above text
`;

//Hamburger
//check library Vittoria chat
const Hamburger = styled.p`
  width: 30px;
  height: 30px;
  background: red;
`;

const HeaderTitle = styled.h1`
  font-family: "Gerbera";
  font-size: 104px;
  color: var(--primary-white);
  transform: rotate(90deg);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const HeaderIcon = styled.img`
  width: 22px;
  height: 32px;
`;

const HeaderText = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  color: var(--primary-blk);
`;

//component
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <Logo /> <Hamburger />
      </HeaderNavigation>
      <HeaderImage src={CobraPose} alt="Woman doing cobra pose"></HeaderImage>
      <HeaderTitle>Yoga</HeaderTitle>
      <HeaderIcon src={Location} alt="Location icon"></HeaderIcon>
      <HeaderText>Stockholm</HeaderText>
      <HeaderText>Åsögatan 96, 128 35</HeaderText>
      <Button>Check schedule</Button>
    </HeaderContainer>
  );
};
