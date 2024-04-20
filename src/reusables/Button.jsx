import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--primary-prpl);
  border-radius: 30px;
  border: none;
  width: 226px;
  height: 55px;
  color: var(--primary-white);
  font-size: 20px;
  padding: 10px;

  &:hover {
    background-color: var(--hover-prpl);
  }
`;
