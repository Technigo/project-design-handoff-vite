import { useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const StyledNav = styled.nav`
  display: flex;
  flex-direction: column; 
  margin: 48px 32px; 

  .img-button-wrapper{
    display: flex; 
    justify-content: space-between; 
  }

  .links-wrapper {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 24px;
  }

  .link {
    color: var(--white-red);
    text-decoration: none;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex; 
    justify-content: flex-end; 
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
     const {t} = useTranslation()
     const [showLinks, setShowLinks] = useState(false)

     //Function to show/hide link-wrapper
     const toggleButton = () => {
      setShowLinks(!showLinks)
      console.log(showLinks)
     }

     //Hide the link-wrapper when a link is clicked
     const handleLinkClick = () => {
      setShowLinks(false)
     }

  return (
    <>
     <StyledNav>
        <div className="img-button-wrapper">
        <img src="/icons/preggo-logo.svg" />
        <button className="hamburger" onClick={toggleButton}>
          <img src="/icons/hamburger.svg" />
        </button>
        </div>
        {showLinks && <div className="links-wrapper">
          <Link className="link">{t("navbar.classes")}</Link>
          <Link className="link">{t("navbar.courses")}</Link>
          <Link className="link">{t("navbar.events")}</Link>
          <Link className="link" to={"/about"} onClick={handleLinkClick}>
          {t("navbar.about")}
          </Link>
        </div> }
        
      </StyledNav>
      </>
  )
}
