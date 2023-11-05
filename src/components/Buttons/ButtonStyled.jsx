import { styled } from "styled-components";

const StyledButton = styled.button`
  background: var(--secondary-color);
  color: var(--font-color);
  width: fit-content;
  padding: 0.625rem;
  border: none;
  border-radius: 0.375rem;

  &:hover {
    color: var(--font-color);
    background: linear-gradient(
      180deg,
      var(--secondary-color),
      var(--tertiary-color)
    );
  }

  &:active {
    background: var(--tertiary-color);
  }

  &:disabled {
    background: var(--background-color);
  }
`;

export const ButtonStyled = ({ text, disabled }) => {
  return (
    <>
      <StyledButton disabled={disabled}>{text}</StyledButton>
    </>
  );
};
