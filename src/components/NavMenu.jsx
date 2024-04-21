/* eslint-disable react/prop-types */
import { Button } from "./Button";
import { Logo } from "./Logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.nav`
  gap: 56px;
  width: 100%;
  height: 100vh;
  background-color: var(--60);
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Optima;

  a {
    text-decoration: none;
    color: var(--text);
    margin: 10px;
    &:hover {
      color: var(--10);
    }
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }

  .wrapper-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  button {
    width: 134px;
  }
`;
export const NavMenu = ({ open }) => {
  return (
    <>
      <Menu open={open}>
        <section>
          <NavLink to="/">Contact</NavLink>
          <NavLink to="/">About me</NavLink>
          <NavLink to="/">The gym</NavLink>
          <NavLink to="/">Membership</NavLink>
          <NavLink to="/">Personal coaching</NavLink>
          <NavLink to="/">Nutrition</NavLink>
          <NavLink to="/">Work with me</NavLink>
          <NavLink to="/">News</NavLink>
        </section>
        <div className="wrapper-nav">
          <Button />
          <Button type="green" />
          <Button type="white" />
          <Logo />
        </div>
      </Menu>
    </>
  );
};
