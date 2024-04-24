import facebook from '../assets/contactIcons/Facebook.svg';
import email from '../assets/contactIcons/Email.svg';
import instagram from '../assets/contactIcons/Instagram.svg';
import phone from '../assets/contactIcons/Phone.svg';
import map from '../assets/contactIcons/Map.svg';
import twitter from '../assets/contactIcons/Twitter.svg';

export const Footer = () => {
  return (
    <footer className="flex justify-center bg-primary-black py-12 text-neutral-white">
      <div className="grid w-max grid-cols-1 gap-y-10">
        <ul className="flex  flex-col gap-8">
          <li className="flex flex-row items-center gap-3">
            <img src={phone} alt="phone number" />
            <p>Tel: +352 961 537 583</p>
          </li>
          <li className="flex flex-row items-center gap-3">
            <img src={email} alt="email" />
            <p>info@aspireyoga.com</p>
          </li>
          <li className="flex flex-row items-center gap-3">
            <img src={map} alt="location" />
            <p>Algarve, Portugal</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-8">
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Terms and conditions</li>
          <li>Cancellation policy</li>
          <li>Press</li>
        </ul>
        <div className="flex flex-row gap-10">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
    </footer>
  );
};
