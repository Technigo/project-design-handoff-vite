import { useState } from "react";
import styled from "styled-components";

const MenuContainer = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  nav {
    position: absolute;
    background-color: #ffffffdd;
    font-size: 10px;
    font-weight: 600;
    padding: 15px;
    text-transform: uppercase;
  }

  li {
    padding: 5px 0;
    img {
      width: 10px;
      height: 10px;
      margin-left: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #585858;
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .menu-icon {
    width: 20px;
    height: 20px;
  }
  .logo {
    width: 50px;
  }
`;

export const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <MenuContainer>
      <button onClick={() => setMenuVisible(!menuVisible)}>
        <img src="/menu-duo.svg" className="menu-icon" alt="Menu" />
      </button>

      {menuVisible && (
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>ABOUT</span> <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>CLASSES</span> <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>SCHEDULE</span> <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>MEMBERSHIP</span> <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>CONTACT</span> <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>FAQ</span> <img src="/gt.svg"></img>
              </a>
            </li>
          </ul>
          <img src="/logo.png" className="logo" alt="Logo" />
        </nav>
      )}
    </MenuContainer>
  );
};
