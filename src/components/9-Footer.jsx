import FacebookIcon from "../assets/icons/newsletter/Facebook.png"
import InstagramIcon from "../assets/icons/newsletter/Instagram.png"
import SpotifyIcon from "../assets/icons/newsletter/Spotify.png"
import Arrow from "../assets/icons/language-select-arrow.svg"
import "./9-Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-box">
        <img className="social-icon" src={FacebookIcon} alt="Facebook icon" />
        <img className="social-icon" src={InstagramIcon} alt="Instagram icon" />
        <img className="social-icon" src={SpotifyIcon} alt="Spotify icon" />
      </div>
      <div className="footer-text">
        <div className="footer-menu">
          <div>
            <ul className="footer-list">
              <li>About Urban Spin</li>
              <li>Contact Us</li>
              <li>Find Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-menu-two">
            <ul className="footer-list">
              <li>Schedule</li>
              <li>FAQs</li>
              <li>Customer Service</li>
            </ul>
            <ul className="footer-list">
              <li>Prices</li>
              <li>Health Benefits</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
        <div className="language-dropdown">
          <button className="dropdown-btn">
            <h3>ENG</h3>
            <img className="language-arrow" src={Arrow} alt="Select arrow" />
          </button>
          <div className="dropdown-content">
            <h3>FR</h3>
          </div>
        </div>
        <div className="copyright-etc">
          <p>© 2024 Urban Spin. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  )
}
