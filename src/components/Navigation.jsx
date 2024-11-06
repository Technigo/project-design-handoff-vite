import React from "react";
import styled from "styled-components";
import HeaderLogo from "../assets/HeaderLogo.png";

// Container for navigation bar
const NavContainer = styled.div`
  display: flex;
  width: 412px;
  height: 53px;
  // padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: #FDF8F5;
`;

// Header logo styling
const StyledHeaderLogo = styled.img`
  width: 171px;
  height: 23px;
  flex-shrink: 0;
`;

export const Navigation = () => {
  return (
    <NavContainer>
      <StyledHeaderLogo src={HeaderLogo} alt="Räddningsmissionen logo in orange and grew colors" />
    </NavContainer>
  );
};
