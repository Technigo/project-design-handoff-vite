import "./Footer.css";
import logoFooter from "../../assets/logoFooter.svg";
import { Link } from "react-router-dom";
import { Buttons } from "../../components/Buttons/Buttons";
import FbLink from "../../assets/FB-link.svg";
import IgLink from "../../assets/Ig-link.svg";
import TikTokLink from "../../assets/TikTok-link.svg";
import { DropDown } from "./DropDown";

import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="footer">
        <div className="first-row">
          <Link to="/">
            <img
              className="footer-logo"
              src={logoFooter}
              alt="Family Fitness Logo"
            />
          </Link>
          <DropDown className="footer-dropdown" />
        </div>
        <div className="links">
          <Link to="/about" className="link-footer">
            {t("Footer.link1")}
          </Link>
          <Link to="/center" className="link-footer">
            {t("Footer.link2")}
          </Link>
          <Link to="/support" className="link-footer">
            {t("Footer.link3")}
          </Link>
          <Link to="/membership" className="link-footer">
            {t("Footer.link4")}
          </Link>
          <Link to="/cookies" className="link-footer">
            {t("Footer.link5")}
          </Link>
          {/* ... Other links */}
        </div>
        <div className="footer-buttons">
          <Buttons
            buttonText=""
            url="https://example.com"
            icon={FbLink}
            alt="Button Icon"
          />

          <Buttons
            buttonText=""
            url="https://example.com"
            icon={IgLink}
            alt="Button Icon"
          />

          <Buttons
            buttonText=""
            url="https://example.com"
            icon={TikTokLink}
            alt="Button Icon"
          />
        </div>
      </div>
    </>
  );
};

// export const Footer = () => {
//   return (
//     <>
//       <div className="footer">
//         <img src={logoFooter} alt="logo" className="footer-logo" />

//         <div className="footer-dropdown">
//           <button className="dropdown-button">English</button>
//           <div className="dropdown-content">
//             <a href="#" className="dropdown-item">
//               <img src="icon1.png" alt="Icon 1" />
//               English
//             </a>
//             <a href="#" className="dropdown-item">
//               <img src="icon2.png" alt="Icon 2" />
//               Norwegian
//             </a>
//             <a href="#" className="dropdown-item">
//               <img src="icon3.png" alt="Icon 3" />
//               Swedish
//             </a>
//           </div>
//         </div>

//         <div className="links">
//           <Link to="/about" className="link-footer">
//             AboutUs
//           </Link>
//           <Link to="/center" className="link-footer">
//             Find your center
//           </Link>
//           <Link to="/support" className="link-footer">
//             Costumer support
//           </Link>
//           <Link to="/membership" className="link-footer">
//             Membership
//           </Link>
//           <Link to="/cookies" className="link-footer">
//             Cookies, privacy and security
//           </Link>

//           <div className="footer-buttons">
//             <Buttons
//               className="footer-icon fb-button"
//               buttonText=""
//               url="https://example.com"
//               icon={FbLink}
//               //   hoverIcon={logoutHover}
//               alt="Button Icon"
//             />

//             <Buttons
//               className="footer-icon"
//               buttonText=""
//               url="https://example.com"
//               icon={IgLink}
//               //   hoverIcon={logoutHover}
//               alt="Button Icon"
//             />

//             <Buttons
//               className="footer-icon"
//               buttonText=""
//               url="https://example.com"
//               icon={TikTokLink}
//               //   hoverIcon={logoutHover}
//               alt="Button Icon"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

{
  /* <div className="footer-dropdown">
<div className="product-option">
  <span className="current-option option" onClick={toggleDropdown}>
    <span>{t("languageName")}</span>
  </span>
  <ul className={`options ${isDropdownOpen ? "open" : ""}`}>
    <li className="option" onClick={() => changeLanguage("en")}>
      <span>{t("languageName")}</span>
    </li>
    <li className="option" onClick={() => changeLanguage("no")}>
      <span>{t("languageName")}</span>
    </li>
    <li className="option" onClick={() => changeLanguage("sv")}>
      <span>{t("languageName")}</span>
    </li>
  </ul>
</div>
</div> */
}
