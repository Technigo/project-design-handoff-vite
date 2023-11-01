import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%; 
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column; 
  margin: 48px 32px; 

  .img-button-wrapper{
    display: flex; 
    justify-content: space-between; 
  }

  .links-wrapper {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 24px;
  }

  .link {
    color: var(--white-red);
    text-decoration: none;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex; 
    justify-content: flex-end; 
  }

  .hamburger {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <div className="img-button-wrapper">
        <img src="/icons/preggo-logo.svg" />
        <button className="hamburger">
          <img src="/icons/hamburger.svg" />
        </button>
        </div>
        <div className="links-wrapper">
          <Link className="link">Classes</Link>
          <Link className="link">Courses</Link>
          <Link className="link">Events</Link>
          <Link className="link" to={"/about"}>
            About
          </Link>
        </div>
      </StyledNav>
    </StyledHeader>
  );
};
