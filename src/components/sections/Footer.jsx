import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";
import { PiFacebookLogoLight } from "react-icons/pi"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: flex-end;
  padding: 0 23px 51px 23px;
  gap: 12px;
  margin-top: 146px;

  .footer-heading {
    margin-top: -29px; 
  }

  img {
    height: 50px;
  }

   .contact-wrapper {
    display: flex;
    gap: 20%; 
  } 

  .links-wrapper-container {
    display: flex; 
    flex-direction: column;
  } 

  .links-wrapper-first {
    display: flex;
    flex-direction: column;
    gap: 9px; 
    margin-bottom: 9px; 
    width: max-content; 
  }

  .links-wrapper-second {
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: max-content; 
  }

  .icons-wrapper {
    display: flex;
    width: 50%;
    gap: 16px;
    width: max-content; 
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

  .facebook-icon {
    color: var(--lightest-red);
    width: 27px;
    height: 27px;
    margin-top: -2px; 
  }

  @media (min-width: 667px) and (max-width: 1024px) {
  .contact-wrapper {
    gap: 200px;  
    justify-content: center
  } 
  .links-wrapper-container{
     flex-direction: row; 
     gap: 200px; 
  }
}

@media (min-width: 1025px) {
  .contact-wrapper {
    gap: 300px;  
    justify-content: center
  } 
  .links-wrapper-container{
     flex-direction: row; 
     gap: 300px; 
  }
}
`;

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <div className="contact-wrapper">
        <div className="links-wrapper-container">
          <div className="links-wrapper-first">
          <h3 className="footer-heading">PreggoYogaStudion</h3>
            <Link className="link">{t("footer.classes")}</Link>
            <Link className="link">{t("footer.events")}</Link>
          </div>
          <div className="links-wrapper-second">
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
        </div>

        <div className="icons-wrapper">
          <SlSocialInstagram className="instagram-icon" />
          <PiFacebookLogoLight className="facebook-icon" />
        </div>
      </div>
    </StyledFooter>
  );
};
