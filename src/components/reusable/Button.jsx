import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background-color: var(--cobalt);
  padding: 0.8rem 2.6rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);

  color: #fff;
  font-family: var(--jetbrains-mono);
  font-size: 1rem;
  text-transform: uppercase;
  transition: ease 0.3s;

  &:hover {
    background-color: var(--bg-color);
  }
`;

export const Button = ({
  className,
  classNameContainer,
  textContent,
  path,
  onClick,
  ariaLabel,
}) => {
  return (
    <Link to={path} className={classNameContainer}>
      <StyledButton
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {textContent}
      </StyledButton>
    </Link>
  );
};
