import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #5d6d50; /* Dark green color */
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a5b3e;
  }
`;

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
