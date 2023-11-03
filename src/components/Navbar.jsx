import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LinksWrapperColumn } from "./LinksWrapperColumn";
import { LinksWrapperRow } from "./LinksWrapperRow";
import { Button } from "./Button";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 48px 32px;

  .img-button-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .hamburger {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Navbar = () => {
  const { t } = useTranslation();
  const [showLinks, setShowLinks] = useState(false);

  //Function to show/hide link-wrapper
  const toggleButton = () => {
    setShowLinks(!showLinks);
    console.log(showLinks);
  };

  //Hide the link-wrapper when a link is clicked
  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <>
      <StyledNav showLinks={showLinks}>
        <div className="img-button-wrapper">
          <Link to={"/"}>
            <img src="/icons/preggo-logo.svg" />
          </Link>
          <LinksWrapperRow />
          <Button navbar>{t("homePage.hero.exploreButton")}</Button>

          <button
            className="hamburger"
            onClick={toggleButton}
            aria-label="links"
          >
            <img src="/icons/hamburger.svg" />
          </button>
        </div>
        {showLinks && <LinksWrapperColumn handleLinkClick={handleLinkClick} />}
      </StyledNav>
    </>
  );
};
