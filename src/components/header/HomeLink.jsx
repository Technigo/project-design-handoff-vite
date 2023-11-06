import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

// Define the styled component for HomeLink
const StyledHomeLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// A component for a link that goes to homepage
export const HomeLink = () => {
  const { t } = useTranslation();
  const location = useLocation();
  let linkText = "";
  let icon = null;

  // Check the pathname to determine the page
  if (location.pathname === "/") {
    linkText = `${t("navbar.homeLink")}`;
  } else if (location.pathname === "/about") {
    linkText = `${t("navbar.BackLink")}`;
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
