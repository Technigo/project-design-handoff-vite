import styled from "styled-components";
import { H2 } from "./Typography";
    
// Define styled button component
  const StyledButton = styled.button`
    padding: ${({ $applyPadding }) => ($applyPadding ? "0 0 1rem 0" : "0")}; /* Conditional padding */

    background-color: ${({ theme }) => theme.backgrounds.highlight};
    color: ${({ theme }) => theme.text.accent}; 
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0625rem;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;

    img {
      width: 2.37556rem;
      height: 2.37488rem;
      flex-shrink: 0;

      @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        width: 3.51163rem;
        height: 3.51056rem;
      }
    }

    :hover {
      transition: letter-spacing 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      letter-spacing: 10px; /* Adjust the spacing on hover for the transition effect */
      white-space: nowrap;
    }
  `;

export const Button = ({
    text,
    icon,
    link,
    onClick,
    applyPadding = false, // Default to false
  }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <StyledButton onClick={onClick || handleClick} $applyPadding={applyPadding}>
      <H2>{text}</H2>
      <img
        src={icon}
        aria-hidden="true" // Hide the icon from assistive technologies
      />
    </StyledButton>
  );
};