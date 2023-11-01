import logo from "../../assets/logo.svg";
import "./footer.css";
import { useTranslation } from "react-i18next";
import mapPin from "../../assets/map-pin.svg";
import phone from "../../assets/phone.svg";
import insta from "../../assets/insta.svg";
import arrow from "../../assets/arrowdown.svg";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  //Function to change the language of the site
  const lngChange = (lang) => {
    return i18n.changeLanguage(`${lang}`);
  };

  return (
    <div className="footer-container">
      <div className="logo-language">
        <img src={logo} alt="logo" />
        <select
          name="select-a-language"
          onChange={(e) => lngChange(e.target.value)}
        >
          <option default disabled>
            Select language
          </option>
          <option value="en">English</option>
          <option value="se">Swedish</option>
        </select>
      </div>
      <div className="footer-contact">
        <h3>Wave Yoga Studio</h3>
        <div className="address">
          <img src={mapPin} alt="map pin icon" />
          <p>Southbeach Rd 7, Freemantle</p>
        </div>
        <div className="phone">
          <img src={phone} alt="phone icon" />
          <p>070 - 123 45 67</p>
        </div>
        <div className="socials">
          <img src={insta} alt="instagram pin" />
          <p>@wave_yogastudio</p>
        </div>
      </div>
      {/* <Link to="/about" element={ }> */}

      <button className="back-to-top">
        <img src={arrow} alt="arrow-pointing-down" className="footer-arrow" />
        {t("backToTop")}
      </button>
      {/* </Link> */}
    </div>
  );
};
