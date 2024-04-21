/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useState } from "react";

const StyledButton = styled.button`
  font-family: Montserrat;
  border-radius: 10px;
  width: 70px;
  height: 44px;
  border: none;
  color: var(--text);
  @media (min-width: 744px) and (max-width: 1440px) {
    width: 125px;
    height: 48px;
  }
  @media (min-width: 1440px) {
    width: 138px;
    height: 52px;
    &:hover {
      background: var(--hover-login-links);
    }
  }
  white-space: nowrap;
  background: ${props =>
    props.active ? props.theme.activeColor : props.theme.defaultBackground};

  ${props =>
    props.type === "green" &&
    css`
      padding: 10px;
      background: ${props =>
        props.active ? props.theme.activeGreenColor : "var(--30)"};
      color: var(--text-card-bg);
      width: 98px;
      height: 44px;
      @media (min-width: 744px) and (max-width: 1440px) {
        width: 211px;
        height: 48px;
      }
      @media (min-width: 1440px) {
        width: 240px;
        height: 52px;
        &:hover {
          background: var(--hover-signup-book);
        }
      }
    `}
  ${props =>
    props.type === "white" &&
    css`
      background: var(--text-card-bg);
      border: 1px solid
        ${props => (props.active ? props.theme.activeBorderColor : "var(--30)")};
      color: ${props =>
        props.active ? props.theme.activeTextColor : "var(--30)"};
      width: 125px;
      height: 44px;
      padding: 10px;
      @media (min-width: 744px) and (max-width: 1440px) {
        width: 192px;
        height: 50px;
      }
      @media (min-width: 1440px) {
        width: 242px;
        height: 54px;
        &:hover {
          color: var(--hover-signup-book);
          border: 1px solid #2b4033;
          background: var(--text-card-bg);
        }
      }
    `}
`;

export const Button = ({ type }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active); // Toggle the active state on click
  };
  let buttonText = "";
  switch (type) {
    case "green":
      buttonText = "Sign Up";
      break;
    case "white":
      buttonText = "Book Meeting";
      break;
    default:
      buttonText = "Login";
  }
  return (
    <>
      <StyledButton
        type={type}
        active={active}
        onClick={toggleActive}
        theme={{
          defaultBackground: "var(--10)",
          activeColor: "var(--onclick-login)",
          activeGreenColor: "var(--onclick-signup-book)",
          activeBorderColor: "var(--onclick-signup-book)",
          activeTextColor: "var(--onclick-signup-book)",
        }}>
        {buttonText}
      </StyledButton>
    </>
  );
};
