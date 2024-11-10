import { useState } from "react";
import styled from "styled-components";

// Styled component for the button
const StyledButton = styled.button`
  // Align content inside the button
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // Set background and text colors based on the active state
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.active : theme.colors.primary};

  // Size, spacing and font styling
  border: none;
  height: 2.5rem;
  border-radius: 1.5625rem;
  padding: 0.5rem 4rem;
  font-size: 1.25rem;
  font-weight: 400;

  // Smooth transitions for background color, text color, and box-shadow
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  // Set box-shadow based on the active state
  box-shadow: ${({ $active }) =>
    $active
      ? "0px 4px 4px rgba(0, 0, 0, 0.25) inset"
      : "0px 4px 4px rgba(0, 0, 0, 0.25)"};

  // Styling for hover state
  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.accent};
  }
  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

// Functional component for the Button
export const Button = ({ children }) => {
  // State to track if button is active
  const [isActive, setIsActive] = useState(false);

  // Toggle active state on click
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  // Render the styled button with dynamic styles
  return (
    <StyledButton $active={isActive} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};
