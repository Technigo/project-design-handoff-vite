import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const Button = styled.button`
  padding: ${(props) => props.padding || "24px 16px"};
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
  transition: box-shadow 0.3s ease;

  /* Base inner shadow for depth */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

  &:hover {
    /* Darker and deeper inner shadow */
    box-shadow: 
      0px -4px 8px 0px rgba(0, 0, 0, 0.35) inset;

    /* Change background color on hover */
    background: ${(props) => props.hoverBackground || "var(--yellow)"};
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 24px px48;
    font-size: 24px;
    line-height: 32px;
  }
`;

export default Button;
