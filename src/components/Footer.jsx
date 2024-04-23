import iconGlobe from "/public/icon-globe.svg";
import iconInstagram from "/public/icon-instagram.svg";
import iconFacebook from "/public/icon-facebook.svg";

export const Footer = () => {
  return (
    <>
      <adress>
        <ul>
          <li>Mitt konto</li>
          <li>Kontakta kundservice</li>
          <li>Om Studio Mamma</li>
          <li>Bli medlem</li>
          <li>Cookies-inställningar</li>
          <li>Allmäna villkör</li>
        </ul>
      </adress>
      <footer>
        <div>
          <img src={iconGlobe} alt="icon globe" />
          <h2>Sweden</h2>
        </div>
        <div>
          <img src={iconInstagram} alt="" />
          <img src={iconFacebook} alt="" />
        </div>
      </footer>
    </>
  );
};
