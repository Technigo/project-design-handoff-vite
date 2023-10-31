import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";

// Define the styled component for HomeLink
const StyledHomeLink = styled(Link)`
  font-family: var(--jetbrains-mono);
  font-weight: var(--fw-800);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// A component for a link that goes to homepage
export const HomeLink = () => {
  const location = useLocation();
  let linkText = "";
  let icon = null;

  // Check the pathname to determine the page
  if (location.pathname === "/") {
    linkText = "HOME";
  } else if (location.pathname === "/want-more") {
    linkText = "Back";
    icon = <RiArrowLeftSLine className="icon" />;
  } else {
    // Add more cases for other pages if needed
  }
  return (
    <StyledHomeLink to="/">
      {icon}
      {linkText}
    </StyledHomeLink>
  );
};
