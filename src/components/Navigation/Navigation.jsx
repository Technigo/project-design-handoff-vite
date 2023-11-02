import styled from "styled-components";
import {  Link  } from "react-router-dom";



const NavigationWrapper = styled.nav`
  background: rgba(85, 75, 61, 0.95);
  position: fixed;
  bottom: 0;/* Set navigation at the bottom of the page. */
  left: 0;
  width: 100%;
  z-index: 100;
  border-top: 5px solid var(--red-color);
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


export const Navigation = ()  =>{
  return (
<NavigationWrapper>
<AppUl  className="app-ul">
  <AppLi className="app-li">
    <Link to="/"> <img src="./home.svg" alt="Home" /></Link>
  </AppLi>
  <AppLi className="app-li">
    <Link to=""><img src="./calendar.svg" alt="Home" /></Link>
  </AppLi>
  <AppLi className="app-li">
    <Link to="information"><img src="./info.svg" alt="Home" /></Link>
  </AppLi>
  <AppLi className="app-li">
    <Link to=""><img src="./contact.svg" alt="Home" /></Link>
  </AppLi>
</AppUl >
</NavigationWrapper>
  )
}

