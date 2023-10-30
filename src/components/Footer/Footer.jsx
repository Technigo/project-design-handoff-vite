import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="boxes">
        <div className="download">
          <p>
            Download the PRIMA BARRE app, access classes from anywhere, anytime
          </p>
          <div className="download-icons">
            <img src="/app-store.svg" alt="app-store" />
            <img src="/google-play.svg" alt="google-play" />
          </div>
        </div>
        <div className="social-media">
          <p>FOLLOW US</p>
          <div className="social-media-icons">
            <img src="./facebook.svg" alt="Facebook" />
            <img src="./instagram.svg" alt="Instagram" />
            <img src="./twitter-x.svg" alt="Twitter-X" />
            <img src="/youtube.svg" alt="Youtube" />
          </div>
        </div>
        <div className="info">
          <p>ABOUT US</p>
          <p>FAQ</p>
          <p>CONTACT US</p>
        </div>
        <div className="terms-policy">
          <p>TERMS AND CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>©️2023 PRIMA BARRE, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
