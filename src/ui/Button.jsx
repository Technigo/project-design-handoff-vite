import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 18.75rem;
  height: 3.5rem;
  margin: 50px auto;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1.125rem;
  border: none;
  background: ${props => props.theme.colors.Accent};
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.50);

  &:hover {
    background-color: ${props => props.theme.colors.BtnHover};
  }
`;
