import styled from "styled-components";
import { H2 } from "./Typography";
    
// Define styled button component
  const StyledButton = styled.button`
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
    }
  `;

export const Button = ({
  text,
  icon,
  link,
  onClick,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };



  return (
  
      <StyledButton onClick={onClick || handleClick}>
        <H2>{text}</H2>
        <img
          src={icon}
          aria-hidden="true" // Hide the icon from assistive technologies
        />
      </StyledButton>

  );
};