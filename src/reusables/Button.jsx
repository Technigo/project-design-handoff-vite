import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--primary-prpl);
  border-radius: 8px;
  border: none;
  color: var(--primary-white);
  font-size: 30px;
  padding: 8px 16px;

  &:hover {
    background-color: var(--hover-prpl);
  }
`;
