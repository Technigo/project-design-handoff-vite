import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 124px;
  background: none;
`;

const Logo = styled.div`
  img {
    height: 84.5px;
    margin-right: 126px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 104px; 
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: inherit; /* Inherit color */
    font-family: "Poppins", sans-serif; 
    font-weight: 400; 
    font-size: 16px; 
    line-height: 24px;
    text-align: center;
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <Logo>
        <img src="/logos/primary-big.png" alt="Logo" />
      </Logo>
      <NavLinks>
        <NavLink>
          <a href="#about">About</a>
        </NavLink>
        <NavLink>
          <a href="#schedule">Schedule</a>
        </NavLink>
        <NavLink>
          <a href="#yoga">Yoga</a>
        </NavLink>
        <NavLink>
          <a href="#prices">Prices</a>
        </NavLink>
      </NavLinks>
    </Nav>
  );
};
