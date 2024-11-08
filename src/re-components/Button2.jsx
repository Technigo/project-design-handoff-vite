import styled from "styled-components";
import { H3 } from "./Typography";
    
// Define styled button component
// Define styled button component
const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.backgrounds.highlight};

  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-decoration-color: #F93701;
  border: none;
  /* width: 100%;
  height: auto; */


  `;

export const Button2 = ({
  text,
  link,
  onClick,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (      
      <StyledButton onClick={onClick || handleClick}>
        <H3>{text}</H3>
      </StyledButton>
  );
};
