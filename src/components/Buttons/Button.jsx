import styled from "styled-components";

const StyledButton = styled.button`
  border-style: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  text-transform: uppercase;
  padding: 6px 10px;
  font-size: 10px;
  width: fit-content;
`;

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>; // The 'children' prop is the text inside the button
};
