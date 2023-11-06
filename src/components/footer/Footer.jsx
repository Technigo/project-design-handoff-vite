import { RiInstagramFill, RiSpotifyFill } from "react-icons/ri";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <nav className="navbar-footer">
        <LanguageSwitcher />
        <ul>
          <Link to="/" onClick={scrollToTop}>
            <li>{t("footer.nav1")}</li>
          </Link>
          <li>{t("footer.nav2")}</li>
          <li>{t("footer.nav3")}</li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://www.instagram.com/inkapetrarebecca/" target="_blank">
          <RiInstagramFill className="icon" />
        </a>
        <a
          href="https://open.spotify.com/user/eer0ds8nf29bby3op5iil4rxn?si=f4e01785b6b84794&nd=1"
          target="_blank"
        >
          <RiSpotifyFill className="icon" />
        </a>
      </div>
    </footer>
  );
};
