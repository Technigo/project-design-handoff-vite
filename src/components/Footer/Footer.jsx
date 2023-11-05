import "./Footer.css";
import addressImage from "../../assets/address.svg";
import phoneImage from "../../assets/phone-solid.svg";
import envelopeImage from "../../assets/envelope.svg";
import fbImage from "../../assets/FacebookLogo.svg";
import instaImage from "../../assets/InstagramLogo.svg";
import logoImage from "../../assets/logo.png";
import globeImage from "../../assets/globe.svg";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-newsletter">
        <h1 className="newsletter-title">Newsletter</h1>
        <p className="newsletter-text">
          Join our yoga community and experience the benefits of mindfulness and
          self-care.
        </p>
        <form action="/subscribe" method="post">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-contact">
        <div className="footer-address">
          <div className="address">
            <img
              src={addressImage}
              alt="address icon"
              className="address-icon"
            />
            <p>Österlenvägen 55 </p>
            <p>272 22 St Olof, Sweden</p>
          </div>
          <img src={phoneImage} alt="phone icon" className="phone-icon" />
          <p>+46 (0) 70 707 61 20</p>
          <img src={envelopeImage} alt="email icon" className="envelope-icon" />
          <p>info@arnyogastudio.com</p>
        </div>
        <div className="footer-logo">
          <img src={logoImage} alt="ARN logo" />
        </div>
        <div className="footer-bottom">
          <div className="footer-icons">
            <img src={fbImage} alt="Facebook logo" className="fb-logo" />
            <img src={instaImage} alt="Instagram logo" className="insta-logo" />
          </div>
          <div className="footer-language-select">
            <img
              src={globeImage}
              alt="Language globe icon"
              className="footer-globe"
            />
            <label htmlFor="language-select" className="sr-only"></label>
            <select id="language-select" name="languages">
              <option value="English">Eng</option>
              <option value="Swedish">Sve</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};
