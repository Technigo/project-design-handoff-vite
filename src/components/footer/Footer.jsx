import {
  RiArrowDownSLine,
  RiInstagramFill,
  RiSpotifyFill,
} from "react-icons/ri";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <nav className="navbar-footer">
        <LanguageSwitcher />
        <ul>
          <li>{t("footer.nav1")}</li>
          <li>{t("footer.nav2")}</li>
          <li>{t("footer.nav3")}</li>
        </ul>
      </nav>
      <div className="social-icons">
        <RiInstagramFill className="icon" />
        <RiSpotifyFill className="icon" />
      </div>
    </footer>
  );
};
