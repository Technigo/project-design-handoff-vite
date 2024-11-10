import styled from "styled-components";

// Define styled button component
    const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.backgrounds.highlight};

    cursor: pointer;
    border: none;

    img {
      width: 1.728rem;
      height: 1.728rem;
      fill: var(--Color, #F93701);
    }
  `;

export const Button3 = ({
  text,
  icon,
  link,
  onClick,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
      <StyledButton onClick={onClick || handleClick}>
        <img
          src={icon}
          aria-hidden="true" // Hide the icon from assistive technologies
        />
      </StyledButton>
  );
};