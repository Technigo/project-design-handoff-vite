import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 381px; 
  justify-content: flex-end; 
  padding: 0 23px 51px 23px; 
  gap: 10px; 

  img {
    height: 50px;
  }

  .contact-wrapper {
    display: flex; 
    gap: 1rem; 
  }

  .links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 9px; 
    width: 50%; 
  }

  .icons-wrapper {
    display: flex; 
    width: 50%; 
    gap: 16px; 
  }

  .link {
    color: var(--lightest-red);
    font-family: "Raleway";
    font-size: 14px;
    font-weight: 400;
    line-height: 154.4%;
    text-decoration: none;
  }

  .instagram-icon {
    color: var(--lightest-red);
    width: 22px;
    height: 22px;
  }
`;

export const Footer = () => {
  const {t} = useTranslation()
  
  return (
    <StyledFooter>
      <h3>PreggoYogaStudion</h3>
      <div className="contact-wrapper">
        <div className="links-wrapper">
          <Link className="link">{t("footer.classes")}</Link>
          <Link className="link">{t("footer.events")}</Link>
          <Link className="link">{t("footer.learn")}</Link>
          <Link className="link">{t("footer.contact")}</Link>
          <Link
            to="/about"
            className="link"
            aria-label="Click to go to about page"
          >
            {t("footer.about")}
          </Link>
        </div>
        <div className="icons-wrapper">
          <SlSocialInstagram className="instagram-icon" />
          <SlSocialInstagram className="instagram-icon" />
        </div>
      </div>
    </StyledFooter>
  );
};
