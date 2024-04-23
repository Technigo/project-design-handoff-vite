import { useState } from "react";
import styled from "styled-components";
import { NavMenu } from "./NavMenu";

const StyledBurger = styled.div`
  padding: 40px 32px;
  width: 2rem;
  /* position: relative; */
  top: 15px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  z-index: 20;
  font-family: Optima;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 32px;
  }

  div {
    width: 2rem;
    height: 3px;
    background-color: var(--10);
    border-radius: 10px;
  }

  img {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 32px;
    top: 40px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Burger = () => {
  const [open, setOpen] = useState(false); // Initialize open state as false
  const toggleMenu = () => setOpen(!open); // Function to toggle the menu
  return (
    <>
      <StyledBurger
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={open}>
        {open ? null : (
          <>
            <div />
            <div />
            <div />
          </>
        )}
        {open ? (
          <>
            <img
              onClick={toggleMenu}
              src="/Close.png"
              alt="Close-button"
            />
            <h2>MENU</h2>
          </>
        ) : null}
      </StyledBurger>
      <NavMenu open={open} />
    </>
  );
};
