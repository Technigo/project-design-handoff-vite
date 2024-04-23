import facebook from '../assets/contactIcons/Facebook.svg';
import email from '../assets/contactIcons/Email.svg';
import instagram from '../assets/contactIcons/Instagram.svg';
import phone from '../assets/contactIcons/Phone.svg';
import map from '../assets/contactIcons/Map.svg';
import twitter from '../assets/contactIcons/Twitter.svg';

export const Footer = () => {
  return (
    <footer className="bg-primary-black text-neutral-white">
      <ul>
        <li>
          <img src={phone} alt="phone number" />
          <p>Tel: +352 961 537 583</p>
        </li>
        <li>
          <img src={email} alt="email" />
          <p>info@aspireyoga.com</p>
        </li>
        <li>
          <img src={map} alt="location" />
          <p>Algarve, Portugal</p>
        </li>
      </ul>
      <ul>
        <li>Contact us</li>
        <li>FAQ</li>
        <li>Terms and conditions</li>
        <li>Cancellation policy</li>
        <li>Press</li>
      </ul>
      <div>
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
      </div>
    </footer>
  );
};
