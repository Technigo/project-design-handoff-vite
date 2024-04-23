import styled from "styled-components";

const StyledNavBar = styled.section`
  font-family: "AvenirMedium", sans-serif;
  background-color: #e4dbd2;
  position: fixed;
  top: 0;
  width: 100%;

  .nav-bar {
    padding: 0 8.8vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    margin: 51px 0 70px 0;
  }

  li {
    list-style-type: none;
    margin-right: 56px;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    list-style-type: none;
  }

  .menu-logo {
    width: 116px;
    height: 47px;
    flex-shrink: 0;
  }

  .account-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NavBar = () => {
  return (
    <StyledNavBar className="nav-section">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <img className="menu-logo" src="./curve.png" alt="home" />
          </li>
          <li>home</li>
          <li>about</li>
          <li>contact us</li>
          <li>shop</li>
          <li>read our blog</li>
        </ul>
        <ul className="account-list">
          <li>account/</li>
          <li>log in</li>
        </ul>
      </nav>
    </StyledNavBar>
  );
};
