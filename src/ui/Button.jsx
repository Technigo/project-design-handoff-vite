/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Typography } from "./Typography";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  height: 3.5rem;
  padding: 0.625rem;
  background: #A05042;
  color: white;
  border: none;
  border-radius: 1.125rem;
  font-size: 1rem;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.50);
  cursor: pointer;
  transition: background 0.3s;
  gap: 0.625rem;
  margin-bottom: 5.75rem;

  &:hover {
    background: #D0B5B0;
  }

  &:active  {
   background: #C68362;
  }
`;

export const Button = ({ text, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {text}
    </StyledButton>
  );
};

