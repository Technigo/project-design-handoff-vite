import styled from "styled-components";

const StyledNavBar = styled.section`
  font-family: "AvenirMedium", sans-serif;
  background-color: #e4dbd2;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0 8.8vw;

  .pages-list {
    width: 100%;
    margin: 51px 0 70px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-logo {
    cursor: pointer;
    margin-right: 56px;
    width: 20%;
    height: auto;
    max-width: 116px;
  }

  li {
    cursor: pointer;
    list-style-type: none;
    margin-right: 56px;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .nav-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    list-style-type: none;
  }

  .account-list {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .small-screen-menu {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    .menu-logo {
      margin-right: 40px;
      width: 15%;
    }

    li {
      margin-right: 40px;
    }
  }

  @media (max-width: 985px) {
    .menu-logo {
      margin-right: 32px;
      width: 15%;
    }

    li {
      margin-right: 32px;
      font-size: 14px;
    }
  }

  @media (max-width: 744px) {
    padding: 24px 40px;
    .pages-list {
      margin: 0;
    }
    .nav-bar {
      padding: 0 4vw;
    }

    .nav-list,
    .account-list {
      display: none;
    }
    .menu-logo {
      margin-right: 32px;
      width: 12%;
    }

    li {
      margin-right: 32px;
      font-size: 14px;
    }

    .small-screen-menu {
      display: block;
    }
  }

  @media (max-width: 428px) {
    .menu-logo {
      width: 20%;
    }

    .burger-icon {
      width: 40px;
    }
  }
`;

export const NavBar = () => {
  return (
    <StyledNavBar className="nav-section">
      <div className="pages-list">
        <img className="menu-logo" src="./curve.png" alt="home" />
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>home</li>
            <li>about</li>
            <li>contact us</li>
            <li>shop</li>
            <li>read our blog</li>
          </ul>
        </nav>
      </div>
      <ul className="account-list">
        <li>account/</li>
        <li>log in</li>
      </ul>
      <a href="#" className="small-screen-menu">
        <img className="burger-icon" src="/burger-menu.png" alt="menu" />
      </a>
    </StyledNavBar>
  );
};
