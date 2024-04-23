import styled from "styled-components";

const StyledNavBar = styled.nav`
  font-family: "AvenirMedium", sans-serif;
`;

export const NavBar = () => {
  return (
    <StyledNavBar className="nav-section">
      <div className="menu-list">
        <p>Menu</p>
      </div>
      <div className="account-list">
        <p>Account</p>
      </div>
    </StyledNavBar>
  );
};
//
