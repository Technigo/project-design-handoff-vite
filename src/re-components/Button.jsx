import styled from "styled-components";
import { H2 } from "./Typography";
    
// Define styled button component
    const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.backgrounds.highlight};
  color: ${({ theme }) => theme.text.accent}; 

    // Style the icon separately
    

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