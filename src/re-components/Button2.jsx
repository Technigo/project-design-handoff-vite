import styled from "styled-components";
import { H2 } from "./Typography";
    
// Define styled button component
    const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    // Example of hover effect
    &:hover {
      background-color: #0056b3;
    }

    // Style the text and icon separately
    span {
      margin-right: 8px;
    }

    img {
      width: 20px;
      height: 20px;
    }
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
        <H2>{text}</H2>
      </StyledButton>


  );
};