import styled from "styled-components";
import rmLogo from "../assets/grm-logo.svg";
import { Menu } from "./Menu"; 

const NavigationWrapper = styled.div`
  align-items: center;
  background-color: #fdf8f5;
  display: flex;
  height: 53px;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Logo = styled.img`
  height: 23px;
  object-fit: cover;
  position: relative;
  width: 171px;
  padding-left: 16px;
`;

const MenuInstance = styled(Menu)`
  height: 45px !important;
  position: relative !important;
  width: 45px !important;
`;

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo src={rmLogo} alt="Rm logo" />
      <MenuInstance />
    </NavigationWrapper>
  );
};
