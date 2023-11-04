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
    align-items: center;
  }

  .sign-up-btn {
    display: none;
  }

  .hamburger {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 1025px) {
    .hamburger {
      display: none;
    }

    .sign-up-btn {
      display: flex;
    }

    .img-button-wrapper {
    margin: 0 7%;
  }
  }
`;

export const Navbar = () => {
  const { t } = useTranslation();
  
  //State for showing/hiding links
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
          <Button className="sign-up-btn" navbar>
            {t("homePage.hero.exploreButton")}
          </Button>

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
