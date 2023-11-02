import "./Footer.css";
import logoFooter from "../../assets/logoFooter.svg";
import { Link } from "react-router-dom";
import { Buttons } from "../../components/Buttons/Buttons";
import FbLink from "../../assets/FB-link.svg";
import IgLink from "../../assets/Ig-link.svg";
import TikTokLink from "../../assets/TikTok-link.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logoFooter} alt="logo" className="footer-logo" />

        <div className="footer-dropdown">
          <button className="dropdown-button">Dropdown</button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              <img src="icon1.png" alt="Icon 1" />
              Item 1
            </a>
            <a href="#" className="dropdown-item">
              <img src="icon2.png" alt="Icon 2" />
              Item 2
            </a>
            <a href="#" className="dropdown-item">
              <img src="icon3.png" alt="Icon 3" />
              Item 3
            </a>
          </div>
        </div>

        <div className="links">
          <Link to="/about" className="link-footer">
            AboutUs
          </Link>
          <Link to="/center" className="link-footer">
            Find your center
          </Link>
          <Link to="/support" className="link-footer">
            Costumer support
          </Link>
          <Link to="/membership" className="link-footer">
            Membership
          </Link>
          <Link to="/cookies" className="link-footer">
            Cookies, privacy and security
          </Link>

          <div className="footer-buttons">
            <Buttons
              className="footer-icon fb-button"
              buttonText=""
              url="https://example.com"
              icon={FbLink}
              //   hoverIcon={logoutHover}
              alt="Button Icon"
            />

            <Buttons
              className="footer-icon"
              buttonText=""
              url="https://example.com"
              icon={IgLink}
              //   hoverIcon={logoutHover}
              alt="Button Icon"
            />

            <Buttons
              className="footer-icon"
              buttonText=""
              url="https://example.com"
              icon={TikTokLink}
              //   hoverIcon={logoutHover}
              alt="Button Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};
