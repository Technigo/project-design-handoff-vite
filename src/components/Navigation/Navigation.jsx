import styled from "styled-components";
import {  NavLink  } from "react-router-dom";



const NavigationWrapper = styled.nav`
  background: rgba(85, 75, 61, 0.95);
  position: fixed;
  bottom: 0;/* Set navigation at the bottom of the page. */
  left: 0;
  width: 100%;
  z-index: 100;
  border-top: 5px solid var(--red-color);
  @media (min-width: 768px) {
    
  }

`;

const AppUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
`;

const AppLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const ActiveLink = styled(NavLink)`
  &.active {
    img {
      fill: yellow;
    }
  }
`;


export const Navigation = ()  =>{
  return (
    <NavigationWrapper>
    <AppUl className="app-ul">
      <AppLi className="app-li">
        <ActiveLink to="/">
          <img src="./home.svg" alt="Home" />
        </ActiveLink>
      </AppLi>
      <AppLi className="app-li">
        <ActiveLink to="/contact-form">
          <img src="./calendar.svg" alt="Calendar" />
        </ActiveLink>
      </AppLi>
      <AppLi className="app-li">
        <ActiveLink to="/information">
          <img src="./info.svg" alt="Information" />
        </ActiveLink>
      </AppLi>
      <AppLi className="app-li">
        <ActiveLink to="/contact-form">
          <img src="./contact.svg" alt="Contact" />
        </ActiveLink>
      </AppLi>
    </AppUl>
  </NavigationWrapper>
  )
}



