import styled from "styled-components";

import { breakpoints } from "./breakpoints";
export const Button = ({ withArrow, children, ...props }) => (
  <StyledButton {...props}>
    {children}
    {withArrow && <ArrowIcon />} {/* Add arrow conditionally */}
  </StyledButton>
);

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding || "10px 16px"};
  border-radius: ${(props) => props.borderRadius || "32px"};
  background: ${(props) => props.background || "var(--yellow-medium)"};
  border: 1px solid var(--yellow);
  border-bottom-width: 4px;
  color: var(--blue-deep);
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "20px"};
  cursor: pointer;
  text-align: center;
  transition: box-shadow 0.3s ease-in-out;

  /* Base inner shadow for depth */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

  &:hover {
    /* Darker and deeper inner shadow */
    box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;

    /* Change background color on hover */
    background: ${(props) => props.hoverBackground || "var(--yellow)"};
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    line-height: 24px;
    padding: 18px 16px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    /*   padding: 24px 48px; */
    font-size: 24px;
    line-height: 32px;
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  width: 10px;
  height: 8px;
  background: url("/icons/arrow1.svg");
  background-size: contain;
  margin-left: 8px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 19px;
    height: 16px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-left: 16px;
    width: 28px;
    height: 24px;
  }
`;

export default Button;
