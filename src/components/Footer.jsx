import iconFacebook from "/icon-facebook.svg";
import iconGlobe from "/icon-globe.svg";
// import iconInstagram from "/icon-instagram.svg";

export const Footer = () => {
  return (
    <>
      <div>
        <ul>
          <li>Mitt konto</li>
          <li>Kontakta kundservice</li>
          <li>Om Studio Mamma</li>
          <li>Bli medlem</li>
          <li>Cookies-inställningar</li>
          <li>Allmänna villkor</li>
        </ul>
      </div>
      <footer>
        <div>
          <img src={iconGlobe} alt="globe-icon" />
          <h2>Sweden</h2>
        </div>
        <div>
          {/* <img src={iconInstagram} alt="instagram-icon" /> */}
          <img src={iconFacebook} alt="facebook-icon" />
        </div>
      </footer>
    </>
  );
};
