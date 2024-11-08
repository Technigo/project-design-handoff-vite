import styled from "styled-components";

const StyledButton = styled.button`

  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color:  ${({ theme }) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.primary};
  border: none;
  height: 2.5rem;
  border-radius: 1.5625rem;
  padding: 0.5rem 4rem;
  font-size: 1.25rem;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a5b3e;
  }
`;

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
